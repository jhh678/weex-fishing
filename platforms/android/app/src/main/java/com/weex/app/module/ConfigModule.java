package com.weex.app.module;

import android.app.Activity;
import android.content.Context;
import android.content.res.Resources;
import android.graphics.Color;
import android.graphics.Point;
import android.os.Build;
import android.view.Display;
import android.view.KeyCharacterMap;
import android.view.KeyEvent;
import android.view.ViewConfiguration;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.utils.WXLogUtils;
import com.weex.app.WXPageActivity;
import com.weex.app.app.AppConstant;
import com.weex.app.util.LogUtils;
import com.weex.app.util.StatusBarUtils;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

/**
 * 创建者     CJR
 * 创建时间   2018-08-21 14:06
 * 描述       参考: https://blog.csdn.net/xu20082100226/article/details/80098958
 * <p>
 * *          这里直接返回结果, 不再将结果放入到 JSCallback中, 试试是不是同步的
 * *          参考: https://segmentfault.com/q/1010000010095283/a-1020000010142089
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class ConfigModule extends WXModule {

  @JSMethod(uiThread = false)
  public Object getBarsHeight() {
    WXLogUtils.e("vivi", "ConfigModule中的getStatusBarHeight方法调用了~~~");
    WXPageActivity act = (WXPageActivity) mWXSDKInstance.getContext();
    Resources resources = act.getResources();
    int statusResourceId = resources.getIdentifier("status_bar_height",
      "dimen", "android");
    //  获取 状态栏 的高度
    int statucbarHeight = resources.getDimensionPixelSize(statusResourceId);
    //  获取 虚拟键盘 高度
    int navigationBarHeight = 0;
    if (isNavigationBarShow(act)) {
      int navigationResourceId = resources.getIdentifier("navigation_bar_height",
        "dimen", "android");
      navigationBarHeight = resources.getDimensionPixelSize(navigationResourceId);
    }

    HashMap data = new HashMap();
    data.put(AppConstant.STATUS_BAR_HEIGHT, statucbarHeight);
    data.put(AppConstant.NAVIGATION_BAR_HEIGHT, navigationBarHeight);


    HashMap result = new HashMap();
    result.put(AppConstant.MODULE_RESULT, AppConstant.MODULE_SUCCESS);
    result.put(AppConstant.MODULE_MSG, "");
    result.put(AppConstant.MODULE_DATA, data);

    return result;
  }

  @JSMethod(uiThread = true)
  public void setStatusBarStyle(Object object) {
    LogUtils.myLog("setSatausBarColor方法中获取到数据:" + object.toString());

    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
      //  6.0 以下的机子不处理
      return;
    }

    Map map = (Map) object;
    Map bgColorMap = (Map) map.get("bgColor");
    String fromColorStr = (String) bgColorMap.get("from");
    String toColorStr = (String) bgColorMap.get("to");
    if (fromColorStr == null && toColorStr == null) {
      return;
    }

    WXPageActivity act = (WXPageActivity) mWXSDKInstance.getContext();
    if (fromColorStr.equals(toColorStr)) {
      //  单一的颜色
      int color = Color.parseColor(fromColorStr);

      StatusBarUtils.addMarginTopEqualStatusBarHeight(act.mTvStatusAlpha);
      StatusBarUtils.setStatusBarColor(act, color, 0);
    } else {
      //  渐变色

      int fromColor = Color.parseColor(fromColorStr);
      int toColor = Color.parseColor(toColorStr);

      String direction = (String) bgColorMap.get("direction");

      int[] colors = {fromColor, toColor};
      StatusBarUtils.addMarginTopEqualStatusBarHeight(act.mTvStatusAlpha);
      StatusBarUtils.setStatusBarGradient(act, direction, colors, 255);
    }

    String style = (String) map.get("style");
    if ("light".equals(style)) {
      //  lightMode true:表示主题是亮色主题, 字体颜色要是黑色; false表示主题是暗色主题, 字体颜色要是白色
      StatusBarUtils.setStatusBarLightModeM(act, false);
    } else if ("dark".equals(style)) {
      StatusBarUtils.setStatusBarLightModeM(act, true);
    }
  }

  /**
   * 检查是否 存在虚拟键盘
   */
  public boolean checkDeviceHasNavigationBar(Context context) {
    boolean hasNavigationBar = false;
    WXPageActivity act = (WXPageActivity) mWXSDKInstance.getContext();
    Resources rs = context.getResources();
    int id = rs.getIdentifier("config_showNavigationBar", "bool", "android");
    if (id > 0) {
      hasNavigationBar = rs.getBoolean(id);
    }
    try {
      Class systemPropertiesClass = Class.forName("android.os.SystemProperties");
      Method m = systemPropertiesClass.getMethod("get", String.class);
      String navBarOverride = (String) m.invoke(systemPropertiesClass, "qemu.hw.mainkeys");
      if ("1".equals(navBarOverride)) {
        hasNavigationBar = false;
      } else if ("0".equals(navBarOverride)) {
        hasNavigationBar = true;
      }
    } catch (Exception e) {

    }
    return hasNavigationBar;
  }

  public boolean isNavigationBarShow(Activity activity) {
    if (!checkDeviceHasNavigationBar(activity)) {
      //  如果没有虚拟键盘, 就是不显示虚拟键盘
      return false;
    }

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
      Display display = activity.getWindowManager().getDefaultDisplay();
      Point size = new Point();
      Point realSize = new Point();
      display.getSize(size);
      display.getRealSize(realSize);
      return realSize.y != size.y;
    } else {
      boolean menu = ViewConfiguration.get(activity).hasPermanentMenuKey();
      boolean back = KeyCharacterMap.deviceHasKey(KeyEvent.KEYCODE_BACK);
      if (menu || back) {
        return false;
      } else {
        return true;
      }
    }
  }

}
