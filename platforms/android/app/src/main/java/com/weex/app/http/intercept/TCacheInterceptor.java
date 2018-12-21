package com.weex.app.http.intercept;


import com.weex.app.WXApplication;
import com.weex.app.util.LogUtils;
import com.weex.app.util.NetworkUtils;

import java.io.IOException;

import okhttp3.CacheControl;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;

/**
 * 创建者     CJR
 * 创建时间   2017-09-27 09:43
 * 描述	      为okhttp添加缓存，这里是考虑到服务器不支持缓存时，从而让okhttp支持缓存
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class TCacheInterceptor implements Interceptor {
    @Override
    public Response intercept(Chain chain) throws IOException {

        LogUtils.myLog("intercept 方法 调用了... ");

        // 有网络时 设置缓存超时时间1min      1个小时: int maxAge = 60 * 60;
        int maxAge = 60;
        // 无网络时，设置超时为6小时   1天: int maxStale = 60 * 60 * 24;
        int maxStale = 60;
        Request request = chain.request();
        if (NetworkUtils.isNetworkConnected(WXApplication.getInstance())) {
            //有网络时只从网络获取
            request = request.newBuilder()
                    .cacheControl(CacheControl.FORCE_NETWORK)
                    .build();
        } else {
            //无网络时只从缓存中读取
            request = request.newBuilder()
                    .cacheControl(CacheControl.FORCE_CACHE)
                    .build();
        }
        Response response = chain.proceed(request);
        if (NetworkUtils.isNetworkConnected(WXApplication.getInstance())) {
            response = response.newBuilder()
                    .removeHeader("Pragma")
                    .header("Cache-Control", "public, max-age=" + maxAge)
                    .build();
        } else {
            response = response.newBuilder()
                    .removeHeader("Pragma")
                    .header("Cache-Control", "public, only-if-cached, max-stale=" + maxStale)
                    .build();
        }
        return response;
    }
}
