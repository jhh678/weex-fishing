package com.weex.app.util;

import android.app.Activity;
import android.content.Context;
import android.content.res.Resources;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.support.annotation.ColorInt;
import android.support.annotation.IntRange;
import android.support.annotation.NonNull;
import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.LinearLayout;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

/**
 * 创建者     CJR
 * 创建时间   2018-08-24 10:12
 * 描述
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class StatusBarUtils {

  /**
   * 设置状态栏黑色字体图标，
   * 适配4.4以上版本MIUIV、Flyme和6.0以上版本其他Android
   *
   * @param activity
   * @return 1:MIUUI 2:Flyme 3:android6.0
   */
  public static int setStatusBarLightMode(Activity activity, boolean isLightMode) {
    int result = 0;
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
      if (setMIUISetStatusBarLightMode(activity.getWindow(), isLightMode)) {
        result = 1;
      } else if (setFlymeSetStatusBarLightMode(activity.getWindow(), isLightMode)) {
        result = 2;
      } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
        setStatusBarLightModeM(activity, isLightMode);
        result = 3;
      }
    }
    return result;
  }

  /**
   * Set the status bar's light mode.
   *
   * @param isLightMode True to set status bar light mode, false otherwise.
   */
  public static void setStatusBarLightModeM(Activity activity, boolean isLightMode) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
      Window window = activity.getWindow();
      View decorView = window.getDecorView();
      if (decorView != null) {
        int vis = decorView.getSystemUiVisibility();
        if (isLightMode) {
          window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
          vis |= View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
        } else {
          vis &= ~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
        }
        decorView.setSystemUiVisibility(vis);
      }
    }
  }

  /**
   * 设置状态栏字体图标为深色，需要MIUIV6以上
   *
   * @param window 需要设置的窗口
   * @param dark   是否把状态栏字体及图标颜色设置为深色
   * @return boolean 成功执行返回true
   */
  public static boolean setMIUISetStatusBarLightMode(Window window, boolean dark) {
    boolean result = false;
    if (window != null) {
      Class clazz = window.getClass();
      try {
        int darkModeFlag = 0;
        Class layoutParams = Class.forName("android.view.MiuiWindowManager$LayoutParams");
        Field field = layoutParams.getField("EXTRA_FLAG_STATUS_BAR_DARK_MODE");
        darkModeFlag = field.getInt(layoutParams);
        Method extraFlagField = clazz.getMethod("setExtraFlags", int.class, int.class);
        if (dark) {
          extraFlagField.invoke(window, darkModeFlag, darkModeFlag);//状态栏透明且黑色字体
        } else {
          extraFlagField.invoke(window, 0, darkModeFlag);//清除黑色字体
        }
        result = true;
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
    return result;
  }

  /**
   * 设置状态栏图标为深色和魅族特定的文字风格
   * 可以用来判断是否为Flyme用户
   *
   * @param window 需要设置的窗口
   * @param dark   是否把状态栏字体及图标颜色设置为深色
   * @return boolean 成功执行返回true
   */
  public static boolean setFlymeSetStatusBarLightMode(Window window, boolean dark) {
    boolean result = false;
    if (window != null) {
      try {
        WindowManager.LayoutParams lp = window.getAttributes();
        Field darkFlag = WindowManager.LayoutParams.class
          .getDeclaredField("MEIZU_FLAG_DARK_STATUS_BAR_ICON");
        Field meizuFlags = WindowManager.LayoutParams.class
          .getDeclaredField("meizuFlags");
        darkFlag.setAccessible(true);
        meizuFlags.setAccessible(true);
        int bit = darkFlag.getInt(null);
        int value = meizuFlags.getInt(lp);
        if (dark) {
          value |= bit;
        } else {
          value &= ~bit;
        }
        meizuFlags.setInt(lp, value);
        window.setAttributes(lp);
        result = true;
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
    return result;
  }


  //============================start 修改StatusBar 颜色============================

  private static final String TAG_ALPHA  = "TAG_ALPHA";
  private static final String TAG_COLOR  = "TAG_COLOR";
  private static final String TAG_OFFSET = "TAG_OFFSET";
  private static final int    KEY_OFFSET = -123;


  /**
   * Add the top margin size equals status bar's height for view.
   *
   * @param view The view.
   */
  public static void addMarginTopEqualStatusBarHeight(@NonNull View view) {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.KITKAT)
      return;
    view.setTag(TAG_OFFSET);
    Object haveSetOffset = view.getTag(KEY_OFFSET);
    if (haveSetOffset != null && (Boolean) haveSetOffset)
      return;
    ViewGroup.MarginLayoutParams layoutParams = (ViewGroup.MarginLayoutParams) view
      .getLayoutParams();
    layoutParams.setMargins(layoutParams.leftMargin,
      layoutParams.topMargin + getStatusBarHeight(view.getContext()),
      layoutParams.rightMargin,
      layoutParams.bottomMargin);
    view.setTag(KEY_OFFSET, true);
  }

  /**
   * Set the status bar's color.
   *
   * @param activity The activity.
   * @param color    The status bar's color.
   * @param alpha    The status bar's alpha which isn't the same as alpha in the color.
   */
  public static void setStatusBarColor(@NonNull final Activity activity,
                                       @ColorInt final int color,
                                       @IntRange(from = 0, to = 255) final int alpha) {
    setStatusBarColor(activity, color, alpha, false);
  }

  /**
   * Set the status bar's color.
   *
   * @param activity The activity.
   * @param color    The status bar's color.
   * @param alpha    The status bar's alpha which isn't the same as alpha in the color.
   * @param isDecor  True to add fake status bar in DecorView,
   *                 false to add fake status bar in ContentView.
   */
  public static void setStatusBarColor(@NonNull final Activity activity,
                                       @ColorInt final int color,
                                       @IntRange(from = 0, to = 255) final int alpha,
                                       final boolean isDecor) {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.KITKAT)
      return;
    hideAlphaView(activity);
    transparentStatusBar(activity);
    addStatusBarColor(activity, color, alpha, isDecor);
  }

  public static void setStatusBarGradient(@NonNull final Activity activity,
                                          final String direction,
                                          final int[] colors,
                                          @IntRange(from = 0, to = 255) final int alpha) {
    setStatusBarGradient(activity, direction, colors, alpha, false);
  }

  public static void setStatusBarGradient(@NonNull final Activity activity,
                                          final String direction,
                                          final int[] colors,
                                          @IntRange(from = 0, to = 255) final int alpha,
                                          final boolean isDecor) {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.KITKAT)
      return;
    hideAlphaView(activity);
    transparentStatusBar(activity);
    addStatusBarGradient(activity, direction, colors, alpha, isDecor);

  }

  private static void hideAlphaView(final Activity activity) {
    hideAlphaView(activity.getWindow());
  }

  private static void hideAlphaView(final Window window) {
    ViewGroup decorView = (ViewGroup) window.getDecorView();
    View fakeStatusBarView = decorView.findViewWithTag(TAG_ALPHA);
    if (fakeStatusBarView == null)
      return;
    fakeStatusBarView.setVisibility(View.GONE);
  }

  private static void transparentStatusBar(final Activity activity) {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.KITKAT)
      return;
    Window window = activity.getWindow();
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
      int option = View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN;
      window.getDecorView().setSystemUiVisibility(option);
      window.setStatusBarColor(Color.TRANSPARENT);
    } else {
      window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
    }
  }

  private static void addStatusBarColor(final Activity activity,
                                        final int color,
                                        final int alpha,
                                        boolean isDecor) {
    ViewGroup parent = isDecor ?
      (ViewGroup) activity.getWindow().getDecorView() :
      (ViewGroup) activity.findViewById(android.R.id.content);
    View fakeStatusBarView = parent.findViewWithTag(TAG_COLOR);
    if (fakeStatusBarView != null) {
      if (fakeStatusBarView.getVisibility() == View.GONE) {
        fakeStatusBarView.setVisibility(View.VISIBLE);
      }
      fakeStatusBarView.setBackgroundColor(getStatusBarColor(color, alpha));
    } else {
      parent.addView(createColorStatusBarView(activity, color, alpha));
    }
  }

  private static void addStatusBarGradient(final Activity activity,
                                           final String direction,
                                           final int colors[],
                                           final int alpha,
                                           boolean isDecor) {
    ViewGroup parent = isDecor ?
      (ViewGroup) activity.getWindow().getDecorView() :
      (ViewGroup) activity.findViewById(android.R.id.content);
    View fakeStatusBarView = parent.findViewWithTag(TAG_COLOR);
    if (fakeStatusBarView != null) {
      if (fakeStatusBarView.getVisibility() == View.GONE) {
        fakeStatusBarView.setVisibility(View.VISIBLE);
      }
      fakeStatusBarView.setBackgroundDrawable(getGradientDrawable(direction, colors, alpha));
    } else {
      parent.addView(createColorStatusBarView(activity, direction, colors, alpha));
    }
  }

  private static int getStatusBarColor(final int color, final int alpha) {
    if (alpha == 0)
      return color;
    float a = 1 - alpha / 255f;
    int red = (color >> 16) & 0xff;
    int green = (color >> 8) & 0xff;
    int blue = color & 0xff;
    red = (int) (red * a + 0.5);
    green = (int) (green * a + 0.5);
    blue = (int) (blue * a + 0.5);
    return Color.argb(255, red, green, blue);
  }

  private static GradientDrawable getGradientDrawable(String direction, int colors[], int alpha) {
    if (colors == null || colors.length == 0) {
      return null;
    }

    /*
     * to right 从左向右渐变
     * to left 从右向左渐变
     * to bottom 从上到下渐变
     * to top 从下到上渐变
     * to bottom right 从左上角到右下角
     * to top left 从右下角到左上角
     */
    //  默认用从左到右方向
    GradientDrawable.Orientation orientation = GradientDrawable.Orientation.LEFT_RIGHT;
    if (!TextUtils.isEmpty(direction)) {
      switch (direction) {
        case "to left":
          orientation = GradientDrawable.Orientation.RIGHT_LEFT;
          break;
        case "to bottom":
          orientation = GradientDrawable.Orientation.TOP_BOTTOM;
          break;
        case "to top":
          orientation = GradientDrawable.Orientation.BOTTOM_TOP;
          break;
        case "to bottom right":
          orientation = GradientDrawable.Orientation.TL_BR;
          break;
        case "to top left":
          orientation = GradientDrawable.Orientation.BR_TL;
          break;
        case "to right":
          break;
        default:
          break;
      }
    }

    GradientDrawable drawable = new GradientDrawable(orientation, colors);
    drawable.setAlpha(alpha);
    return drawable;
  }

  private static View createColorStatusBarView(final Context context,
                                               final int color,
                                               final int alpha) {
    View statusBarView = new View(context);
    statusBarView.setLayoutParams(new LinearLayout.LayoutParams(
      ViewGroup.LayoutParams.MATCH_PARENT, getStatusBarHeight(context)));
    statusBarView.setBackgroundColor(getStatusBarColor(color, alpha));
    statusBarView.setTag(TAG_COLOR);
    return statusBarView;
  }

  private static View createColorStatusBarView(final Context context,
                                               final String direction,
                                               final int[] colors,
                                               final int alpha) {
    View statusBarView = new View(context);
    statusBarView.setLayoutParams(new LinearLayout.LayoutParams(
      ViewGroup.LayoutParams.MATCH_PARENT, getStatusBarHeight(context)));
    statusBarView.setBackgroundDrawable(getGradientDrawable(direction, colors, alpha));
    statusBarView.setTag(TAG_COLOR);
    return statusBarView;
  }

  /**
   * Return the status bar's height.
   *
   * @return the status bar's height
   */
  public static int getStatusBarHeight(Context context) {
    Resources resources = context.getResources();
    int resourceId = resources.getIdentifier("status_bar_height",
      "dimen", "android");
    return resources.getDimensionPixelSize(resourceId);
  }

  //============================end 修改StatusBar 颜色============================
}
