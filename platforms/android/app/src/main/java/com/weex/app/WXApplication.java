package com.weex.app;

import android.app.Application;

import com.alibaba.weex.plugin.loader.WeexPluginContainer;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;
import com.weex.app.extend.FrescoImageAdapter;
import com.weex.app.extend.TtyWeb;
import com.weex.app.extend.WXEventModule;
import com.weex.app.module.CloseModule;
import com.weex.app.module.ConfigModule;
import com.weex.app.module.LocationModule;
import com.weex.app.util.AppConfig;

public class WXApplication extends Application {

  /**
   * 单例实例
   */
  private static WXApplication sInstance;

  @Override
  public void onCreate() {
    super.onCreate();
    sInstance = this;
    Fresco.initialize(this);
    WXSDKEngine.addCustomOptions("appName", "WXSample");
    WXSDKEngine.addCustomOptions("appGroup", "WXApp");
    WXSDKEngine.initialize(this,
      new InitConfig.Builder().setImgAdapter(new FrescoImageAdapter()).build()
    );
    try {
      WXSDKEngine.registerModule("event", WXEventModule.class);
      //  注册定位功能模块
      WXSDKEngine.registerModule("ttyLocation", LocationModule.class);
      //  注册获取一些原生 参数相关的模块
      WXSDKEngine.registerModule("ttyConfig", ConfigModule.class);
      //  注册 Web 组件, 覆盖原有组件, 为了修改WebView 的loading
      WXSDKEngine.registerComponent("web", TtyWeb.class);
      //  注册 Close 组件, 提供退出app方法
      WXSDKEngine.registerModule("ttyClose", CloseModule.class);
    } catch (WXException e) {
      e.printStackTrace();
    }
    AppConfig.init(this);
    WeexPluginContainer.loadAll(this);
  }

  /**
   * @return the application singleton instance       获取单列的实列
   */
  public static WXApplication getInstance() {
    return sInstance;
  }
}
