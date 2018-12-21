package com.weex.app.extend;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.Animatable;
import android.net.Uri;
import android.net.http.SslError;
import android.support.annotation.Nullable;
import android.view.Gravity;
import android.view.View;
import android.webkit.SslErrorHandler;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;

import com.facebook.common.util.UriUtil;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.drawee.view.SimpleDraweeView;
import com.taobao.weex.ui.view.IWebView;
import com.taobao.weex.utils.WXLogUtils;
import com.weex.app.R;
import com.weex.app.util.LogUtils;

/**
 * 创建者     CJR
 * 创建时间   2018-08-21 16:32
 * 描述       这里拷贝 WXWebView, 并修改loading的显示
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class TtyWebView implements IWebView {

  private Context          mContext;
  private WebView          mWebView;
  private SimpleDraweeView mLoadingSdv;
  private boolean mShowLoading = true;

  private OnErrorListener mOnErrorListener;
  private OnPageListener  mOnPageListener;


  public TtyWebView(Context context) {
    mContext = context;
  }

  @Override
  public View getView() {
    FrameLayout root = new FrameLayout(mContext);
    root.setBackgroundColor(Color.WHITE);

    mWebView = new WebView(mContext);
    // mContext.getApplicationContext();
    FrameLayout.LayoutParams wvLayoutParams =
      new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT,
        FrameLayout.LayoutParams.MATCH_PARENT);
    wvLayoutParams.gravity = Gravity.CENTER;
    mWebView.setLayoutParams(wvLayoutParams);
    root.addView(mWebView);
    initWebView(mWebView);

    mLoadingSdv = new SimpleDraweeView(mContext);

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

    showProgressBar(false);
    int loadingSize = mContext.getResources().getDimensionPixelSize(R.dimen.loading_size);
    LogUtils.myLog("loadingSize = " + loadingSize);
    FrameLayout.LayoutParams pLayoutParams =
      new FrameLayout.LayoutParams(loadingSize, loadingSize);
    pLayoutParams.gravity = Gravity.CENTER;
    mLoadingSdv.setLayoutParams(pLayoutParams);

    root.addView(mLoadingSdv);
    return root;
  }

  @Override
  public void destroy() {
    if (getWebView() != null) {
      getWebView().removeAllViews();
      getWebView().destroy();
      mWebView = null;
    }
  }

  @Override
  public void loadUrl(String url) {
    if (getWebView() == null)
      return;
    getWebView().loadUrl(url);
  }

  @Override
  public void reload() {
    if (getWebView() == null)
      return;
    getWebView().reload();
  }

  @Override
  public void goBack() {
    if (getWebView() == null)
      return;
    getWebView().goBack();
  }

  @Override
  public void goForward() {
    if (getWebView() == null)
      return;
    getWebView().goForward();
  }

  @Override
  public void setShowLoading(boolean shown) {
    mShowLoading = shown;
  }

  @Override
  public void setOnErrorListener(OnErrorListener listener) {
    mOnErrorListener = listener;
  }

  @Override
  public void setOnPageListener(OnPageListener listener) {
    mOnPageListener = listener;
  }

  private void showProgressBar(boolean show) {
    if (mShowLoading) {
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

  private void showWebView(boolean shown) {
    mWebView.setVisibility(shown ? View.VISIBLE : View.INVISIBLE);
  }

  private @Nullable
  WebView getWebView() {
    //TODO: remove this, duplicate with getView semantically.
    return mWebView;
  }

  private void initWebView(WebView wv) {
    WebSettings settings = wv.getSettings();
    settings.setJavaScriptEnabled(true);
    settings.setAppCacheEnabled(true);
    settings.setUseWideViewPort(true);
    settings.setDomStorageEnabled(true);
    settings.setSupportZoom(false);
    settings.setBuiltInZoomControls(false);
    wv.setWebViewClient(new WebViewClient() {

      @Override
      public boolean shouldOverrideUrlLoading(WebView view, String url) {
        view.loadUrl(url);
        WXLogUtils.v("tag", "onPageOverride " + url);
        return true;
      }

      @Override
      public void onPageStarted(WebView view, String url, Bitmap favicon) {
        super.onPageStarted(view, url, favicon);
        WXLogUtils.v("tag", "onPageStarted " + url);
        if (mOnPageListener != null) {
          mOnPageListener.onPageStart(url);
        }
      }

      @Override
      public void onPageFinished(WebView view, String url) {
        super.onPageFinished(view, url);
        WXLogUtils.v("tag", "onPageFinished " + url);
        if (mOnPageListener != null) {
          mOnPageListener.onPageFinish(url, view.canGoBack(), view.canGoForward());
        }
      }

      @Override
      public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError
        error) {
        super.onReceivedError(view, request, error);
        if (mOnErrorListener != null) {
          //mOnErrorListener.onError("error", "page error code:" + error.getErrorCode() + ",
          // desc:" + error.getDescription() + ", url:" + request.getUrl());
          mOnErrorListener.onError("error", "page error");
        }
      }

      @Override
      public void onReceivedHttpError(WebView view, WebResourceRequest request,
                                      WebResourceResponse errorResponse) {
        super.onReceivedHttpError(view, request, errorResponse);
        if (mOnErrorListener != null) {
          mOnErrorListener.onError("error", "http error");
        }
      }

      @Override
      public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
        super.onReceivedSslError(view, handler, error);
        if (mOnErrorListener != null) {
          mOnErrorListener.onError("error", "ssl error");
        }
      }

    });
    wv.setWebChromeClient(new WebChromeClient() {
      @Override
      public void onProgressChanged(WebView view, int newProgress) {
        super.onProgressChanged(view, newProgress);
        showWebView(newProgress == 100);
        showProgressBar(newProgress != 100);
        WXLogUtils.v("tag", "onPageProgressChanged " + newProgress);
      }

      @Override
      public void onReceivedTitle(WebView view, String title) {
        super.onReceivedTitle(view, title);
        if (mOnPageListener != null) {
          mOnPageListener.onReceivedTitle(view.getTitle());
        }
      }

    });
  }

}
