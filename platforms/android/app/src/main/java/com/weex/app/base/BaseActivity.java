package com.weex.app.base;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.os.IBinder;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.Toast;

import com.trello.rxlifecycle2.components.support.RxAppCompatActivity;
import com.weex.app.widget.LoadingDialogHelper;

public abstract class BaseActivity extends RxAppCompatActivity implements View.OnClickListener {

  private   Toast               mToast;
  protected LoadingDialogHelper mLoadingDialogHelper;


  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    //  add CJR     将该activity添加到管理者中, 主要是方便以后跳转和退出app

    onContentView();
    initView();
    initData();
    initListener();
  }

  /**
   * 填充layout
   */
  protected abstract void onContentView();

  /**
   * 初始化view
   */
  protected abstract void initView();

  /**
   * 初始化数据
   */
  protected abstract void initData();

  /**
   * 初始化监听
   */
  protected abstract void initListener();

  /**
   * 默认都实现了点击事件
   *
   * @param v 被点击的view
   */
  @Override
  public void onClick(View v) {
  }


  public void startActivity(Class cls) {
    startActivity(new Intent(this, cls));
  }

  //  --------------start 弹toast-------------

  public void doToast(String contents) {
    if (mToast == null) {
      mToast = Toast.makeText(this, contents, Toast.LENGTH_SHORT);
    } else {
      mToast.setText(contents);
      mToast.setDuration(Toast.LENGTH_SHORT);
    }
    mToast.show();
  }

  public void doToast(int contents) {
    if (mToast == null) {
      mToast = Toast.makeText(this, contents, Toast.LENGTH_SHORT);
    } else {
      mToast.setText(contents);
      mToast.setDuration(Toast.LENGTH_SHORT);
    }
    mToast.show();
  }

  /**
   * onStop和onDestroy的时候会调用这个方法, 如果不想在onStop和onDestroy的时候取消吐司, 重写该方法
   */
  public void cancelToast() {
    if (mToast != null) {
      mToast.cancel();
    }
  }

  //  --------------end 弹toast-------------

  //------- start 点击空白处隐藏软键盘 -------------------
  //  add CJR 点击空白隐藏软键盘
  @Override
  public boolean dispatchTouchEvent(MotionEvent ev) {
    if (ev.getAction() == MotionEvent.ACTION_DOWN) {
      View v = getCurrentFocus();
      if (isShouldHideKeyboard(v, ev)) {
        hideKeyboard(v.getWindowToken());
      }
    }
    return super.dispatchTouchEvent(ev);
  }

  /**
   * 根据EditText所在坐标和用户点击的坐标相对比，来判断是否隐藏键盘，因为当用户点击EditText时则不能隐藏
   *
   * @param v
   * @param event
   * @return
   */
  protected boolean isShouldHideKeyboard(View v, MotionEvent event) {
    if (v != null && (v instanceof EditText)) {
      int[] l = {0, 0};
      v.getLocationInWindow(l);
      int left = l[0],
        top = l[1],
        bottom = top + v.getHeight(),
        right = left + v.getWidth();
      if (event.getX() > left && event.getX() < right
        && event.getY() > top && event.getY() < bottom) {
        // 点击EditText的事件，忽略它。
        return false;
      } else {
        return true;
      }
    }
    // 如果焦点不是EditText则忽略，这个发生在视图刚绘制完，第一个焦点不在EditText上，和用户用轨迹球选择其他的焦点
    return false;
  }

  /**
   * 获取InputMethodManager，隐藏软键盘
   *
   * @param token
   */
  protected void hideKeyboard(IBinder token) {
    if (token != null) {
      InputMethodManager im = (InputMethodManager) getSystemService(Context
        .INPUT_METHOD_SERVICE);
      im.hideSoftInputFromWindow(token, InputMethodManager.HIDE_NOT_ALWAYS);
    }
  }
  //------- end 点击空白处隐藏软键盘 -------------------

  // ------------ start 生命周期--------------------
  protected void onPause() {
    super.onPause();
    cancelToast();
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
  }

  // ------------ end 生命周期--------------------

  /*=============== start 加载的loading ===============*/

  /**
   * @param onCancelListener dialog取消时的回调
   * @param msg              dialog上要显示的文字, 如"加载中..."
   * @param canDismissByBack 是否能通过back键取消, true: back键取消dialog; false: back键返回上一Activity
   */
  public void showLoadingDialog(DialogInterface.OnCancelListener onCancelListener,
                                String msg, boolean canDismissByBack) {
    if (mLoadingDialogHelper == null) {
      mLoadingDialogHelper = new LoadingDialogHelper(this);
    }
    mLoadingDialogHelper.showCorrectState(false);
    mLoadingDialogHelper.showProgressBar(true);
    mLoadingDialogHelper.setOnCancelListener(onCancelListener);
    mLoadingDialogHelper.setLoadingMsgText(msg);
    mLoadingDialogHelper.showDialog();

    if (!canDismissByBack) {
      mLoadingDialogHelper.dialog.setOnKeyListener((dialog1, keyCode, event) -> {
        if (keyCode == KeyEvent.KEYCODE_BACK && event.getAction() == KeyEvent.ACTION_UP
          && event.getRepeatCount() == 0) {
          //  在加载中, 显示了dialog, 按回退键的话直接结束activity
          dialog1.dismiss();
          finish();
        }
        return true;
      });
    }
  }

  public void showLoadingDialog(DialogInterface.OnCancelListener onCancelListener,
                                String msg) {
    showLoadingDialog(onCancelListener, msg, true);
  }

  public void hideLoadingDialog() {
    if (mLoadingDialogHelper != null)
      mLoadingDialogHelper.hideDialog();
  }
  /*=============== end 加载的loading ===============*/
}
