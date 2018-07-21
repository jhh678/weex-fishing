package com.weex.app;

import android.app.Application;

import com.alibaba.weex.plugin.loader.WeexPluginContainer;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;
import com.taobao.weex.utils.WXLogUtils;
import com.weex.app.extend.ImageAdapter;
import com.weex.app.extend.WXEventModule;
import com.weex.app.module.ScanModule;
import com.weex.app.util.AppConfig;

public class WXApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        WXSDKEngine.addCustomOptions("appName", "WXSample");
        WXSDKEngine.addCustomOptions("appGroup", "WXApp");
        WXSDKEngine.initialize(this,
                new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build()
        );
        try {
            WXSDKEngine.registerModule("event", WXEventModule.class);
            //  注册扫码的module 这里module名称可以自定义
            WXSDKEngine.registerModule("tty-scan", ScanModule.class);
            WXLogUtils.e("vivi", "注册ScanModule成功");
        } catch (WXException e) {
            WXLogUtils.e("vivi", "注册出现异常:" + e.getMessage());
            e.printStackTrace();
        }
        AppConfig.init(this);
        WeexPluginContainer.loadAll(this);
    }
}
