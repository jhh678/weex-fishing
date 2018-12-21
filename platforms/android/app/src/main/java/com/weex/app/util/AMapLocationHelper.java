package com.weex.app.util;

import android.content.Context;

import com.amap.api.location.AMapLocationClient;
import com.amap.api.location.AMapLocationClientOption;
import com.amap.api.location.AMapLocationListener;
import com.weex.app.base.BaseLocationHelper;
import com.weex.app.bean.AmapIPBean;
import com.weex.app.http.RetrofitHelper;

import io.reactivex.disposables.Disposable;

/**
 * 创建者     CJR
 * 创建时间   2018-08-02 11:11
 * 描述       高德定位的帮助类, 这里封装了sdk定位和IP定位, 其中ip定位拿到省市后去后台拿区县
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class AMapLocationHelper extends BaseLocationHelper {

  private AMapLocationClient       mLocationClient;
  private AMapLocationClientOption mLocationOption;
  private Disposable               mIPLocationDisposable;

  public AMapLocationListener mLocationListener = location -> {

    //  高德地图 sdk 定位结果
    stopLocation();
    if (location == null) {
      performLocationResult(null, null, null);
    } else {
      performLocationResult(location.getProvince(),
        location.getCity(), location.getDistrict());
    }
  };

  @Override
  protected void initSDKLocation(Context context) {
    //  初始化定位client
    mLocationClient = new AMapLocationClient(context);
    mLocationOption = new AMapLocationClientOption();
    // 设置定位模式为高精度模式
    mLocationOption.setLocationMode(AMapLocationClientOption.AMapLocationMode.Hight_Accuracy);

    /**
     * 设置是否优先返回GPS定位结果，如果30秒内GPS没有返回定位结果则进行网络定位
     * 注意：只有在高精度模式下的单次定位有效，其他方式无效
     */
    mLocationOption.setGpsFirst(true);
    // 设置定位参数
    mLocationClient.setLocationOption(mLocationOption);

    //  设置回调监听
    mLocationClient.setLocationListener(mLocationListener);

    //  构建定位option
    AMapLocationClientOption locationOption = new AMapLocationClientOption();
    //  设置定位模式为 AMapLocationMode.Hight_Accuracy, 钉宫耗模式
    locationOption.setLocationMode(AMapLocationClientOption.AMapLocationMode.Hight_Accuracy);
    //  该方法默认为false, true表示只定位一次
    locationOption.setOnceLocation(true);

    locationOption.setMockEnable(true);

    boolean flag = true;
    locationOption.setMockEnable(flag);
    locationOption.setMockEnable(false);

    //  给定位客户端对象设置定位参数
    mLocationClient.setLocationOption(locationOption);
  }

  @Override
  public void startLocation(Context context) {
    if (mLocationClient != null) {
      if (!mLocationClient.isStarted()) {
        mLocationClient.startLocation();
      }
    } else {
      initSDKLocation(context);
      mLocationClient.startLocation();
    }
  }

  @Override
  public void stopLocation() {
    if (mLocationClient != null && mLocationClient.isStarted()) {
      mLocationClient.stopLocation();
    }
  }

  @Override
  public void startIPLocation() {
    if (mIPLocationDisposable != null && !mIPLocationDisposable.isDisposed()) {
      return;
    }
    mIPLocationDisposable = RetrofitHelper.getApiService()
      .getLocationByIP()
      .compose(RxSchedulers.normalSchedulers())
      .subscribe(this::getLocationByIPSuccess, this::getLocationByIPFailed);
  }

  @Override
  public void stopIPLocation() {
    if (mIPLocationDisposable != null && !mIPLocationDisposable.isDisposed()) {
      mIPLocationDisposable.dispose();
      mIPLocationDisposable = null;
    }
  }

  public void getLocationByIPSuccess(AmapIPBean bean) {
    if (bean == null) {
      performIPLocationResult(null, null);
    } else {
      performIPLocationResult(bean.province, bean.city);
    }
  }

  public void getLocationByIPFailed(Throwable throwable) {
    if (mListener != null) {
      mListener.onIPLocationResultFailed(throwable.getMessage());
    }
  }

  @Override
  public void onDestroy() {
    stopLocation();
    //  取消ip定位的网络请求
    stopIPLocation();
    if (mLocationClient != null && mLocationListener != null) {
      mLocationClient.unRegisterLocationListener(mLocationListener);
      mLocationListener = null;
      mLocationClient = null;
    }
  }
}
