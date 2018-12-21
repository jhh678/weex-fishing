package com.weex.app;

import android.content.Intent;
import android.graphics.drawable.Animatable;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.content.LocalBroadcastManager;
import android.text.TextUtils;
import android.util.Log;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.facebook.common.util.UriUtil;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.drawee.view.SimpleDraweeView;
import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXRenderErrorCode;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.ui.component.NestedContainer;
import com.taobao.weex.utils.WXLogUtils;
import com.taobao.weex.utils.WXSoInstallMgrSdk;
import com.weex.app.app.AppConstant;
import com.weex.app.base.BaseLocationHelper;
import com.weex.app.hotreload.HotReloadManager;
import com.weex.app.module.LocationModule;
import com.weex.app.util.AMapLocationHelper;
import com.weex.app.util.AppConfig;
import com.weex.app.util.Constants;
import com.weex.app.util.LogUtils;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;


public class WXPageActivity extends AbsWeexActivity implements
  WXSDKInstance.NestedInstanceInterceptor {

  private static final String TAG = "WXPageActivity";
  private SimpleDraweeView mLoadingSdv;
  private TextView         mTipView;
  private boolean mFromSplash = false;
  private HotReloadManager mHotReloadManager;
  private JSCallback       mOnLocationCallback;
  public  TextView         mTvStatusAlpha;

  /**
   * 长按回退事件
   */
  private boolean mIsBackLongPress;

  /**
   * 高德定位的帮助类, 这里封装了sdk定位和IP定位
   */
  private AMapLocationHelper mAMapLocationHelper;

  @Override
  public void onCreateNestInstance(WXSDKInstance instance, NestedContainer container) {
    Log.d(TAG, "Nested Instance created.");
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_wxpage);
    mContainer = (ViewGroup) findViewById(R.id.container);
    mLoadingSdv = (SimpleDraweeView) findViewById(R.id.activity_wxpage_loading_sdv);
    mTipView = (TextView) findViewById(R.id.index_tip);

    mTvStatusAlpha = (TextView) findViewById(R.id.tv_status_alpha);

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
    //  设置定位结果监听
    mAMapLocationHelper.setOnLocationResultListener(new BaseLocationHelper
      .OnLocationResultListener() {

      @Override
      public void onPerpareLocation() {
      }

      @Override
      public void onSDKLocationResultSuccess() {
        LogUtils.myLog("onSDKLocationResultSuccess方法调用了~");
        LocationModule.setJsCallbackData(mOnLocationCallback,
          AppConstant.MODULE_SUCCESS, "sdk定位成功");
      }

      @Override
      public void onSDKLocationResultFailed(String failedMsg) {
        LogUtils.myLog("onSDKLocationResultFailed方法调用了~");
        LocationModule.setJsCallbackData(mOnLocationCallback,
          AppConstant.MODULE_FAILED, "sdk定位失败:" + failedMsg);
      }

      @Override
      public void onIPLocationResultSuccess() {
        LogUtils.myLog("onIPLocationResultSuccess方法调用了~");
        LocationModule.setJsCallbackData(mOnLocationCallback,
          AppConstant.MODULE_SUCCESS, "IP定位成功");
      }

      @Override
      public void onIPLocationResultFailed(String failedMsg) {
        LogUtils.myLog("onIPLocationResultFailed方法调用了~");
        LocationModule.setJsCallbackData(mOnLocationCallback,
          AppConstant.MODULE_FAILED, "IP定位失败:" + failedMsg);
      }
    });

    Intent intent = getIntent();
    Uri uri = intent.getData();
    String from = intent.getStringExtra("from");
    mFromSplash = "splash".equals(from);

    if (uri == null) {
      uri = Uri.parse("{}");
    }
    if (uri != null) {
      try {
        JSONObject initData = new JSONObject(uri.toString());
        String bundleUrl = initData.optString("WeexBundle", null);
        if (bundleUrl != null) {
          mUri = Uri.parse(bundleUrl);
        }

        String ws = initData.optString("Ws", null);
        if (!TextUtils.isEmpty(ws)) {
          mHotReloadManager = new HotReloadManager(ws, new HotReloadManager.ActionListener() {
            @Override
            public void reload() {
              runOnUiThread(new Runnable() {
                @Override
                public void run() {
                  Toast.makeText(WXPageActivity.this, "Hot reload", Toast.LENGTH_SHORT).show();
                  createWeexInstance();
                  renderPage();
                }
              });
            }

            @Override
            public void render(final String bundleUrl) {
              runOnUiThread(new Runnable() {
                @Override
                public void run() {
                  Toast.makeText(WXPageActivity.this, "Render: " + bundleUrl, Toast.LENGTH_SHORT)
                    .show();
                  createWeexInstance();
                  loadUrl(bundleUrl);
                }
              });
            }
          });
        } else {
          WXLogUtils.w("Weex", "can not get hot reload config");
        }
      } catch (JSONException e) {
        e.printStackTrace();
      }
    }

    if (mUri == null) {
      mUri = Uri.parse(AppConfig.getLaunchUrl());
    }

    if (!WXSoInstallMgrSdk.isCPUSupport()) {
      showLoading(false);
      mTipView.setText(R.string.cpu_not_support_tip);
      return;
    }

    String url = getUrl(mUri);
    if (getSupportActionBar() != null) {
      getSupportActionBar().setTitle(url);
      getSupportActionBar().hide();
    }
    loadUrl(url);
  }

  private String getUrl(Uri uri) {
    String url = uri.toString();
    String scheme = uri.getScheme();
    if (uri.isHierarchical()) {
      if (TextUtils.equals(scheme, "http") || TextUtils.equals(scheme, "https")) {
        String weexTpl = uri.getQueryParameter(Constants.WEEX_TPL_KEY);
        if (!TextUtils.isEmpty(weexTpl)) {
          url = weexTpl;
        }
      }
    }
    return url;
  }

  protected void preRenderPage() {
    showLoading(true);
  }

  @Override
  public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull
    int[] grantResults) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    Intent intent = new Intent("requestPermission");
    intent.putExtra("REQUEST_PERMISSION_CODE", requestCode);
    intent.putExtra("permissions", permissions);
    intent.putExtra("grantResults", grantResults);
    LocalBroadcastManager.getInstance(this).sendBroadcast(intent);
  }


  @Override
  public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
    showLoading(false);
    mTipView.setVisibility(View.GONE);
  }

  @Override
  public void onException(WXSDKInstance instance, String errCode, String msg) {
    showLoading(false);
    mTipView.setVisibility(View.VISIBLE);
    if (TextUtils.equals(errCode, WXRenderErrorCode.WX_NETWORK_ERROR)) {
      mTipView.setText(R.string.index_tip);
    } else {
      mTipView.setText("render error:" + errCode);
    }
  }

  @Override
  public boolean onCreateOptionsMenu(Menu menu) {
    getMenuInflater().inflate(mFromSplash ? R.menu.main_scan : R.menu.main, menu);
    return super.onCreateOptionsMenu(menu);
  }

  @Override
  public boolean onOptionsItemSelected(MenuItem item) {
    switch (item.getItemId()) {
      case R.id.action_refresh:
        createWeexInstance();
        renderPage();
        break;
      case R.id.action_scan:
        IntentIntegrator integrator = new IntentIntegrator(this);
        integrator.setDesiredBarcodeFormats(IntentIntegrator.QR_CODE_TYPES);
        integrator.setPrompt("Scan a barcode");
        //integrator.setCameraId(0);  // Use a specific camera of the device
        integrator.setBeepEnabled(true);
        integrator.setOrientationLocked(false);
        integrator.setBarcodeImageEnabled(true);
        integrator.setPrompt(getString(R.string.capture_qrcode_prompt));
        integrator.initiateScan();
        break;
      case android.R.id.home:
        finish();
      default:
        break;
    }

    return super.onOptionsItemSelected(item);
  }

  @Override
  public void onActivityResult(int requestCode, int resultCode, Intent data) {
    IntentResult result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
    if (result != null) {
      if (result.getContents() == null) {
        Toast.makeText(this, "Cancelled", Toast.LENGTH_LONG).show();
      } else {
        handleDecodeInternally(result.getContents());
      }
    }
    super.onActivityResult(requestCode, resultCode, data);
  }

  // Put up our own UI for how to handle the decoded contents.
  private void handleDecodeInternally(String code) {

    if (!TextUtils.isEmpty(code)) {
      Uri uri = Uri.parse(code);
      if (uri.getQueryParameterNames().contains("bundle")) {
        WXEnvironment.sDynamicMode = uri.getBooleanQueryParameter("debug", false);
        WXEnvironment.sDynamicUrl = uri.getQueryParameter("bundle");
        String tip = WXEnvironment.sDynamicMode ? "Has switched to Dynamic Mode" : "Has switched " +
          "to Normal Mode";
        Toast.makeText(this, tip, Toast.LENGTH_SHORT).show();
        finish();
        return;
      } else if (uri.getQueryParameterNames().contains("_wx_devtool")) {
        WXEnvironment.sRemoteDebugProxyUrl = uri.getQueryParameter("_wx_devtool");
        WXEnvironment.sDebugServerConnectable = true;
        WXSDKEngine.reload();
        Toast.makeText(this, "devtool", Toast.LENGTH_SHORT).show();
        return;
      } else if (code.contains("_wx_debug")) {
        uri = Uri.parse(code);
        String debug_url = uri.getQueryParameter("_wx_debug");
        WXSDKEngine.switchDebugModel(true, debug_url);
        finish();
      } else {
        JSONObject data = new JSONObject();
        try {
          data.put("WeexBundle", Uri.parse(code).toString());
          Intent intent = new Intent(WXPageActivity.this, WXPageActivity.class);
          intent.setData(Uri.parse(data.toString()));
          startActivity(intent);
        } catch (JSONException e) {
          e.printStackTrace();
        }
      }
    }
  }

  @Override
  public void onDestroy() {
    super.onDestroy();
    mAMapLocationHelper.onDestroy();
    if (mHotReloadManager != null) {
      mHotReloadManager.destroy();
    }
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

  public void setOnLocationCallback(JSCallback onLocationCallback) {
    mOnLocationCallback = onLocationCallback;
  }

  @Override
  public boolean onKeyLongPress(int keyCode, KeyEvent event) {
    if (keyCode == KeyEvent.KEYCODE_BACK) {
      mIsBackLongPress = true;
    }
    return super.onKeyLongPress(keyCode, event);
  }

  @Override
  public void onBackPressed() {
    LogUtils.myLog("mIsBackLongPress = " + mIsBackLongPress);
    HashMap result = new HashMap();
    result.put("keyCode", KeyEvent.KEYCODE_BACK);
    result.put("longPress", mIsBackLongPress);
    mInstance.fireGlobalEventCallback("keyback", result);
    mIsBackLongPress = false;
  }
}
