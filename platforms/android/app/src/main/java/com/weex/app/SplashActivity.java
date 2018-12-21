package com.weex.app;

import android.content.Intent;
import android.graphics.drawable.Animatable;
import android.net.Uri;
import android.os.SystemClock;
import android.view.View;

import com.facebook.common.util.UriUtil;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.drawee.view.SimpleDraweeView;
import com.trello.rxlifecycle2.android.ActivityEvent;
import com.weex.app.app.AppConstant;
import com.weex.app.base.BaseActivity;
import com.weex.app.base.BaseLocationHelper;
import com.weex.app.util.AMapLocationHelper;
import com.weex.app.util.LogUtils;
import com.weex.app.util.SPUtils;

import java.util.concurrent.TimeUnit;

import io.reactivex.Observable;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.Disposable;


public class SplashActivity extends BaseActivity {

  /**
   * 网络连接错误的View
   */
  private View mNetErrorContainer;

  /**
   * loading  的 gif图
   */
  private SimpleDraweeView mLoadingSdv;

  /**
   * 记录开始定位的时间, 定位结束后判断是否超过2s, 超过直接跳转页面, 没超过补上剩下的时间
   */
  private long mStartTime;

  private Disposable mTurnDisposable;

  /**
   * 高德定位的帮助类, 这里封装了sdk定位和IP定位
   */
  private AMapLocationHelper mAMapLocationHelper;

  @Override
  protected void onContentView() {
    setContentView(R.layout.activity_splash);
  }

  @Override
  protected void initView() {
    mNetErrorContainer = findViewById(R.id.activity_splash_error_container_ll);

    mLoadingSdv = (SimpleDraweeView) findViewById(R.id.activity_splash_loading_sdv);
  }

  @Override
  protected void initData() {
    //  Fresco 加载gif
    Uri gifUri = new Uri.Builder()
      .scheme(UriUtil.LOCAL_RESOURCE_SCHEME)
      .path(String.valueOf(R.drawable.logo_loading))
      .build();
    DraweeController controller = Fresco.newDraweeControllerBuilder()
      .setUri(gifUri)
      .setAutoPlayAnimations(true)
      .build();

    mLoadingSdv.setController(controller);

    mAMapLocationHelper = new AMapLocationHelper();

    //  判断是否第一次启动
    boolean firstLauncher = (boolean) SPUtils
      .get(this, AppConstant.FIRST_LAUNCHER, true);

    if (firstLauncher) {
      //  首次启动 需要定位
      mStartTime = SystemClock.elapsedRealtime();
      //  设置定位结果监听
      mAMapLocationHelper.setOnLocationResultListener(new BaseLocationHelper
        .OnLocationResultListener() {

        @Override
        public void onPerpareLocation() {
          showLoading(true);
        }

        @Override
        public void onSDKLocationResultSuccess() {
          LogUtils.myLog("onSDKLocationResultSuccess方法调用了~");
          showNetErrorView(false);
          showLoading(false);
          SPUtils.put(SplashActivity.this, AppConstant.FIRST_LAUNCHER, false);
          checkTimeAfterNet();
        }

        @Override
        public void onSDKLocationResultFailed(String failedMsg) {
          LogUtils.myLog("onSDKLocationResultFailed方法调用了~");
          showNetErrorView(false);
          showLoading(false);
          doToast(failedMsg);
          showNetErrorView(true);
        }

        @Override
        public void onIPLocationResultSuccess() {
          LogUtils.myLog("onIPLocationResultSuccess方法调用了~");
          showLoading(false);
          SPUtils.put(SplashActivity.this, AppConstant.FIRST_LAUNCHER, false);
          checkTimeAfterNet();
        }

        @Override
        public void onIPLocationResultFailed(String failedMsg) {
          LogUtils.myLog("onIPLocationResultFailed方法调用了~");
          showLoading(false);
          showNetErrorView(true);
        }
      });
      mAMapLocationHelper.checkPermissionAndLocation(this);
    } else {
      //  不是首次启动
      mTurnDisposable = Observable.timer(2, TimeUnit.SECONDS)
        .observeOn(AndroidSchedulers.mainThread())
        .compose(bindUntilEvent(ActivityEvent.DESTROY))
        .subscribe(aLong -> turn2WXPageActivity());
    }
  }

  @Override
  protected void initListener() {
    findViewById(R.id.activity_splash_refresh_tv).setOnClickListener(v -> {
      //  "刷新"的点击事件
      mAMapLocationHelper.checkPermissionAndLocation(this);
    });
  }

  /**
   * 跳转主页
   */
  private void turn2WXPageActivity() {
    Intent intent = new Intent(SplashActivity.this, WXPageActivity.class);
    Uri data = getIntent().getData();
    if (data != null) {
      intent.setData(data);
    }
    intent.putExtra("from", "splash");
    startActivity(intent);
    finish();
  }

  /**
   * 检查是否能够跳转页面了
   */
  private void checkTimeAfterNet() {
    long currentTime = SystemClock.elapsedRealtime();
    long timeDelta = currentTime - mStartTime;
    if (timeDelta >= 2000) {
      //  超过2秒, 直接跳转
      turn2WXPageActivity();
    } else {
      //  跳过的点击事件
      //  不到2秒, 将剩下的时间补上
      mTurnDisposable = Observable.timer(2000 - timeDelta, TimeUnit.MILLISECONDS)
        .observeOn(AndroidSchedulers.mainThread())
        .compose(bindUntilEvent(ActivityEvent.DESTROY))
        .subscribe(aLong -> turn2WXPageActivity());
    }
  }

  /**
   * 显示网络连接失败
   */
  private void showNetErrorView(boolean show) {
    mNetErrorContainer.setVisibility(show ? View.VISIBLE : View.GONE);
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
    mAMapLocationHelper.onDestroy();
    showLoading(false);
  }

  public void showLoading(boolean show) {
    Animatable animatable = mLoadingSdv.getController().getAnimatable();
    if (show) {
      mLoadingSdv.setVisibility(View.VISIBLE);
      if (animatable != null && !animatable.isRunning()) {
        animatable.start();
      }
    } else {
      mLoadingSdv.setVisibility(View.GONE);
      if (animatable != null && animatable.isRunning()) {
        animatable.stop();
      }
    }
  }
}
