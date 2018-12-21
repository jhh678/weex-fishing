package com.weex.app.app;

/**
 * 创建者     CJR
 * 创建时间   2018-08-01 15:35
 * 描述       记录常量的类
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public interface AppConstant {

  /**
   * base_url
   */
  String API_DOMAIN_NAME = "http://main.dev.ngrok.ttyun.com/";

  /**
   * 高德地图根据ip获取定位的api TODO 申请key
   * 参考: https://lbs.amap.com/api/webservice/guide/api/ipconfig
   */
  String AMP_API_URL = "http://restapi.amap.com/v3/ip?key=1d057eccde8ff1a65d41a562baefc156";

  /**
   * module约定的返回格式: {
   * "result": success/failed
   * "msg": String
   * "data": object
   * }
   */
  String MODULE_RESULT = "result";

  String MODULE_MSG = "msg";

  String MODULE_DATA = "data";

  String MODULE_SUCCESS = "success";

  String MODULE_FAILED = "failed";

  /*===========================start  用于SharedPreferences传递的key  ===========================*/

  /**
   * 首次启动的sp-key
   */
  String FIRST_LAUNCHER = "first_launcher";

  /**
   * 定位的获取的省的sp-key
   */
  String LOCATION_PROVINCE = "locationProvince";

  /**
   * 定位获取的市的sp-key
   */
  String LOCATION_CITY = "locationCity";

  /**
   * 定位获取的区、县的sp-key
   */
  String LOCATION_DISTRICT = "locationDistrict";

  String STATUS_BAR_HEIGHT = "statusBarHeight";

  String NAVIGATION_BAR_HEIGHT = "navigationBarHeight";

  /*============================end  用于SharedPreferences传递的key  ============================*/
}
