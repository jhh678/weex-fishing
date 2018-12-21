package com.weex.app.module;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.utils.WXLogUtils;
import com.weex.app.WXApplication;
import com.weex.app.WXPageActivity;
import com.weex.app.app.AppConstant;
import com.weex.app.util.SPUtils;

import java.util.HashMap;
import java.util.Map;

/**
 * 创建者     CJR
 * 创建时间   2018-08-06 09:33
 * 描述       定位以及获取定位信息的module
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class LocationModule extends WXModule {

  @JSMethod(uiThread = true)
  public void getLocationMsg(JSCallback callback) {
    WXLogUtils.e("vivi", "LocationModule中的getLocationMsg方法调用了~~~");
    setJsCallbackData(callback, AppConstant.MODULE_SUCCESS, "");
  }

  @JSMethod(uiThread = true)
  public void startLocation(JSCallback callback) {
    WXLogUtils.e("vivi", "LocationModule中的startLocation方法调用了~~~");
    WXPageActivity act = (WXPageActivity) mWXSDKInstance.getContext();
    act.setOnLocationCallback(callback);
  }

  /**
   * @param callback     js的callback
   * @param moduleResult 定位的结果, success表示成功, failed表示定位失败,
   * @param msg          定位的信息
   */
  public static void setJsCallbackData(JSCallback callback, String moduleResult, String msg) {
    if (callback == null) {
      return;
    }

    Map data = new HashMap();
    String province = (String) SPUtils.get(WXApplication.getInstance(),
      AppConstant.LOCATION_PROVINCE, "");
    String city = (String) SPUtils.get(WXApplication.getInstance(),
      AppConstant.LOCATION_CITY, "");
    String district = (String) SPUtils.get(WXApplication.getInstance(),
      AppConstant.LOCATION_DISTRICT, "");
    data.put(AppConstant.LOCATION_PROVINCE, province);
    data.put(AppConstant.LOCATION_CITY, city);
    data.put(AppConstant.LOCATION_DISTRICT, district);

    Map result = new HashMap();
    result.put(AppConstant.MODULE_RESULT, moduleResult);
    result.put(AppConstant.MODULE_MSG, msg);
    result.put(AppConstant.MODULE_DATA, data);
    callback.invokeAndKeepAlive(result);
  }
}
