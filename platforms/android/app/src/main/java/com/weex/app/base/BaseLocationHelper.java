package com.weex.app.base;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.text.TextUtils;

import com.weex.app.WXApplication;
import com.weex.app.app.AppConstant;
import com.weex.app.util.LogUtils;
import com.weex.app.util.NetworkUtils;
import com.weex.app.util.SPUtils;
import com.yanzhenjie.permission.AndPermission;

/**
 * 创建者     CJR
 * 创建时间   2018-08-02 09:40
 * 描述       获取定位的帮助类的基类
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public abstract class BaseLocationHelper {

  protected OnLocationResultListener mListener;

  public void setOnLocationResultListener(OnLocationResultListener listener) {
    mListener = listener;
  }

  /**
   * 检查定位权限, 并进行定位 (需求: 有权限用sdk定位; 没权限用IP定位再随便给个区县; 6.0以下国产定制rom没有
   * 权限一样能从sdk返回结果)
   */
  public void checkPermissionAndLocation(Activity activity) {
    if (!NetworkUtils.isNetworkConnected(activity)) {
      //  TODO: 网络貌似不太给力，点击重试
      if (mListener != null) {
        mListener.onIPLocationResultFailed("网络连接异常");
      }
    } else {
      AndPermission.with(activity)
        .permission(Manifest.permission.ACCESS_COARSE_LOCATION)
        //  准备方法，和 okhttp 的拦截器一样，在请求权限之前先运行该方法，已经拥有权限不会触发该方法
        .rationale((context, permissions, executor) -> {
          LogUtils.myLog("rationale方法调用了, permissions = " + permissions.toString());
          //  此处可以选择显示提示弹窗
          //  executor.execute();
          if (mListener != null) {
            mListener.onPerpareLocation();
          }
          startIPLocation();
        })
        //  用户给权限了
        .onGranted(permissions -> {
          LogUtils.myLog("用户给权限啦:" + permissions.toString());
          if (mListener != null) {
            mListener.onPerpareLocation();
          }
          startLocation(activity);
        })
        //  用户拒绝权限，包括不再显示权限弹窗也在此列
        .onDenied(permissions -> {
          LogUtils.myLog("onDenied方法调用了~~~:" + permissions.toString());
          if (mListener != null) {
            mListener.onPerpareLocation();
          }
          startIPLocation();
        })
        .start();
    }
  }

  protected abstract void initSDKLocation(Context context);

  public abstract void startLocation(Context context);

  public abstract void stopLocation();

  /**
   * IP定位, 这里因为没用RxLifeCycle (定位的功能不只在RxCompatActivity上), 记得在onDestroy的时候取消订阅
   */
  public abstract void startIPLocation();

  public abstract void stopIPLocation();

  public abstract void onDestroy();


  /**
   * 处理 sdk 定位的结果
   */
  protected void performLocationResult(String province, String city, String district) {
    if (TextUtils.isEmpty(province)) {
      if (mListener != null) {
        mListener.onSDKLocationResultFailed("province is empty");
      }
    } else if (TextUtils.isEmpty(city)) {
      if (mListener != null) {
        mListener.onSDKLocationResultFailed("city is empty");
      }
    } else {
      if (district == null) {
        district = "";
      }
      //  记录定位获取到的省
      SPUtils.put(WXApplication.getInstance(), AppConstant.LOCATION_PROVINCE, province);
      //  记录定位获取到的市
      SPUtils.put(WXApplication.getInstance(), AppConstant.LOCATION_CITY, city);
      //  记录定位获取到的区/县
      SPUtils.put(WXApplication.getInstance(), AppConstant.LOCATION_DISTRICT, district);

      if (mListener != null) {
        mListener.onSDKLocationResultSuccess();
      }
    }
  }

  protected void performIPLocationResult(String province, String city) {
    if (TextUtils.isEmpty(province)) {
      if (mListener != null) {
        mListener.onIPLocationResultFailed("province is empty");
      }
    } else if (TextUtils.isEmpty(city)) {
      if (mListener != null) {
        mListener.onIPLocationResultFailed("city is empty");
      }
    } else {
      //  记录定位获取到的省
      SPUtils.put(WXApplication.getInstance(), AppConstant.LOCATION_PROVINCE, province);
      //  记录定位获取到的市
      SPUtils.put(WXApplication.getInstance(), AppConstant.LOCATION_CITY, city);
      //  记录定位获取到的区/县
      SPUtils.put(WXApplication.getInstance(), AppConstant.LOCATION_DISTRICT, "");

      if (mListener != null) {
        mListener.onIPLocationResultSuccess();
      }
    }
  }

  public interface OnLocationResultListener {

    /**
     * 开始定位前回调, 可以做一些初始化或者loading
     */
    void onPerpareLocation();


    /**
     * sdk 定位成功
     */
    void onSDKLocationResultSuccess();

    /**
     * sdk 定位失败
     *
     * @param failedMsg 失败信息
     */
    void onSDKLocationResultFailed(String failedMsg);

    /**
     * ip定位成功
     */
    void onIPLocationResultSuccess();

    /**
     * ip 定位失败
     *
     * @param failedMsg 失败信息
     */
    void onIPLocationResultFailed(String failedMsg);
  }
}
