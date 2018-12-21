package com.weex.app.http.intercept;

import com.weex.app.WXApplication;
import com.weex.app.util.NetworkUtils;

import java.io.IOException;

import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;

/**
 * 创建者     CJR
 * 创建时间   2017-09-28 16:16
 * 描述	      有网络情况下的缓存设置
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class InterceptorOnNet implements Interceptor {
    @Override
    public Response intercept(Chain chain) throws IOException {
        Request request = chain.request();
        if (NetworkUtils.isNetworkConnected(WXApplication.getInstance())) {
            Response response = chain.proceed(request);
            return response.newBuilder().removeHeader("Pragma")
                    //  有网络的情况不获取缓存
                    .header("Cache-Control", "public, max-age=" + 0)
                    .build();
        }
        return null;
    }
}
