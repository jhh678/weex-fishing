package com.weex.app.http;


import com.weex.app.BuildConfig;
import com.weex.app.WXApplication;
import com.weex.app.app.AppConstant;
import com.weex.app.http.intercept.InterceptorNoNet;
import com.weex.app.http.intercept.InterceptorOnNet;
import com.weex.app.util.LogUtils;

import java.io.File;
import java.util.concurrent.TimeUnit;

import okhttp3.Cache;
import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * 创建者     CJR
 * 创建时间   2017-07-04 08:48
 * 描述	      Retrofit帮助类
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class RetrofitHelper {

  private static ApiService mApiService;

  public static ApiService getApiService() {
    if (mApiService == null) {
      synchronized (RetrofitHelper.class) {
        if (mApiService == null) {
          mApiService = createApi(ApiService.class, AppConstant.API_DOMAIN_NAME);
        }
      }
    }
    return mApiService;
  }

  private static <T> T createApi(Class<T> clazz, String baseUrl) {
    Retrofit retrofit = new Retrofit.Builder()
      .baseUrl(baseUrl)
      .client(OkHttpClientHolder.sOkHttpClient)
      .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
      .addConverterFactory(GsonConverterFactory.create())
      .build();
    return retrofit.create(clazz);
  }

  /**
   * 使用静态内部类实现OkHttpClient的单例
   */
  private static class OkHttpClientHolder {
    private static final OkHttpClient sOkHttpClient = initOkHttpClient();

    /**
     * 初始化OKHttpClient,设置缓存,设置超时时间,设置打印日志,设置UA拦截器
     */
    private static OkHttpClient initOkHttpClient() {
      //设置Http缓存
      Cache cache = new Cache(new File(WXApplication.getInstance()
        .getCacheDir(), "HttpCache"), 1024 * 1024 * 10);

      OkHttpClient.Builder builder = new OkHttpClient.Builder();

      if (BuildConfig.DEBUG) {
        HttpLoggingInterceptor loggingInterceptor = new HttpLoggingInterceptor(message ->
          LogUtils.netLog("retrofitBack = " + message));
        loggingInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
        builder.addInterceptor(loggingInterceptor);
      }

      InterceptorOnNet cacheOnConnect = new InterceptorOnNet();
      InterceptorNoNet cacheDisconnect = new InterceptorNoNet();
      OkHttpClient okHttpClient = builder.cache(cache)
        .addNetworkInterceptor(cacheOnConnect)
        .addInterceptor(cacheDisconnect)
        //  重连, 这里不开启, 因为定制行不高
        .retryOnConnectionFailure(true)
        .connectTimeout(30, TimeUnit.SECONDS)
        .writeTimeout(20, TimeUnit.SECONDS)
        .readTimeout(20, TimeUnit.SECONDS)
        .build();
      return okHttpClient;
    }
  }
}
