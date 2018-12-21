package com.weex.app.widget;

import android.content.Context;
import android.content.DialogInterface;
import android.util.DisplayMetrics;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.weex.app.R;


/**
 * 创建者     CJR
 * 创建时间   2017-09-30 15:33
 * 描述
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class LoadingDialogHelper {
  public android.support.v7.app.AlertDialog dialog;
  public View                               dialogView;

  public ImageView   mViewLoadingCorrectIv;
  public ProgressBar mViewLoadingPb;
  public TextView    mViewLoadingMsgTv;

  public LoadingDialogHelper(Context context) {
    initConfig(context);
    initView();
  }

  private void initConfig(Context context) {
    android.support.v7.app.AlertDialog.Builder builder =
      new android.support.v7.app.AlertDialog.Builder(context, R.style
        .ProgressDialogStyle);
    dialogView = View.inflate(context, R.layout.view_loading_dialog, null);
    builder.setView(dialogView);
    dialog = builder.create();
    dialog.setCancelable(true);
    dialog.setCanceledOnTouchOutside(false);
    dialog.getWindow().setBackgroundDrawableResource(android.R.color.transparent);

    //  以下代码是为了Dialog能铺满屏幕
    Window dialogWindow = dialog.getWindow();
    dialogWindow.getDecorView().setPadding(0, 0, 0, 0);
    WindowManager.LayoutParams lp = dialogWindow.getAttributes();
    //            lp.width = WindowManager.LayoutParams.MATCH_PARENT;
    DisplayMetrics displayMetrics = context.getResources().getDisplayMetrics();
    lp.width = (int) (displayMetrics.widthPixels * 0.6f);
    lp.height = WindowManager.LayoutParams.WRAP_CONTENT;
    dialogWindow.setAttributes(lp);

  }

  private void initView() {
    mViewLoadingCorrectIv = (ImageView) dialogView.findViewById(R.id.view_loading_correct_iv);
    mViewLoadingPb = (ProgressBar) dialogView.findViewById(R.id.view_loading_pb);
    mViewLoadingMsgTv = (TextView) dialogView.findViewById(R.id.view_loading_msg_tv);
  }

  public void setOnCancelListener(DialogInterface.OnCancelListener onCancelListener) {
    dialog.setOnCancelListener(onCancelListener);
  }

  public void setLoadingMsgText(String msg) {
    mViewLoadingMsgTv.setText(msg);
  }

  public void showProgressBar(boolean show) {
    mViewLoadingPb.setVisibility(show ? View.VISIBLE : View.GONE);
  }

  public void showCorrectState(boolean show) {
    mViewLoadingCorrectIv.setVisibility(show ? View.VISIBLE : View.GONE);
  }

  public void showDialog() {
    if (!dialog.isShowing()) {
      dialog.show();
    }
  }

  public void hideDialog() {
    if (dialog != null) {
      dialog.cancel();
    }
  }
}
