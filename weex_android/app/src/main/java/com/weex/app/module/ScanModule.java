package com.weex.app.module;

import com.google.zxing.integration.android.IntentIntegrator;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.utils.WXLogUtils;
import com.weex.app.WXPageActivity;
import com.weex.app.ui.ScanActivity;

/**
 * 创建者     CJR
 * 创建时间   2018-07-17 09:18
 * 描述       https://my.oschina.net/justplay/blog/1542830
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class ScanModule extends WXModule {

    @JSMethod(uiThread = true)
    public void scanCode(JSCallback callback) {
        WXLogUtils.e("vivi", "Module中的scanCode方法调用了~~~");
        WXPageActivity act = (WXPageActivity) mWXSDKInstance.getContext();
        act.setOnScanFinishCallback(callback);


        //   然后在点击事件中设置属性
        IntentIntegrator integrator = new IntentIntegrator(act);
        //  设置要扫描的条码类型，ONE_D_CODE_TYPES：一维码，QR_CODE_TYPES-二维码
        integrator.setDesiredBarcodeFormats(IntentIntegrator.QR_CODE_TYPES);
        integrator.setCaptureActivity(ScanActivity.class);
        //  底部的提示文字，设为""可以置空
        integrator.setPrompt("将二维码放在框内，即可自动扫描");
        //  前置或者后置摄像头
        integrator.setCameraId(0);
        //  扫描成功的「哔哔」声，默认开启
        integrator.setBeepEnabled(false);
        //  是否保留扫码成功时候的截图
        integrator.setBarcodeImageEnabled(false);
        integrator.initiateScan();
    }

}
