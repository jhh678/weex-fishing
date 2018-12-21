package com.weex.app.util;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;

/**
 * 创建者     CJR
 * 创建时间   2017-07-04 09:08
 * 描述
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 */
public class NetworkUtils {
  /**
   * 判断网络是否连通
   */
  public static boolean isNetworkConnected(Context context) {
    try {
      if (context != null) {
        @SuppressWarnings("static-access")
        ConnectivityManager cm = (ConnectivityManager) context
          .getSystemService(context.CONNECTIVITY_SERVICE);
        NetworkInfo info = cm.getActiveNetworkInfo();
        return info != null && info.isConnected();
      } else {
        /**如果context为空，就返回false，表示网络未连接*/
        return false;
      }
    } catch (Exception e) {
      e.printStackTrace();
      return false;
    }
  }

  public static boolean isWiFiActive(Context inContext) {
    WifiManager mWifiManager = (WifiManager) inContext.getApplicationContext()
      .getSystemService(Context.WIFI_SERVICE);
    WifiInfo wifiInfo = mWifiManager.getConnectionInfo();
    int ipAddress = wifiInfo == null ? 0 : wifiInfo.getIpAddress();
    if (mWifiManager.isWifiEnabled() && ipAddress != 0) {
      //  是wifi连接
      return true;
    } else {
      //  移动网络
      return false;
    }
  }

  public static boolean isUrl(String addr) {
    if (addr == null) {
      return false;
    }
    String regex = "^(https|http)://.*?(net|com|.com|.cn|org|me|moe)/$";
    return addr.matches(regex);
  }
}
