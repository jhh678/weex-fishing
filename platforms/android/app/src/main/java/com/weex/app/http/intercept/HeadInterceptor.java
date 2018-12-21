package com.weex.app.http.intercept;

import java.io.IOException;

import okhttp3.Interceptor;
import okhttp3.Response;

/**
 * 创建者     CJR
 * 创建时间   2017-09-27 09:45
 * 描述	      添加统一的头
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class HeadInterceptor implements Interceptor {
    @Override
    public Response intercept(Chain chain) throws IOException {
        return chain.proceed(chain.request().newBuilder()
                //   这两个也是从T-MVP-master里出来的
                //   .addHeader("X-LC-CodeSN", C.X_LC_Id)
                //   .addHeader("X-LC-Key", C.X_LC_Key)
                .addHeader("Content-Type", "application/json;charset=UTF-8")
                .addHeader("Accept", "application/json;charset=UTF-8")
                .build());
    }
}
