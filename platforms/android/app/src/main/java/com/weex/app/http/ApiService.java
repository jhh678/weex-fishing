package com.weex.app.http;


import com.weex.app.app.AppConstant;
import com.weex.app.bean.AmapIPBean;

import io.reactivex.Observable;
import retrofit2.http.GET;

/**
 * 创建者     CJR
 * 创建时间   2017-05-12 17:06
 * 描述	      网络请求需要的类, 这里参考的T-MVP-master的MVP例子,使用了Flowable替换了Observable,
 * *         因为Observable在2.0里是不支持背压的
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public interface ApiService {

  @GET(AppConstant.AMP_API_URL)
  Observable<AmapIPBean> getLocationByIP();

}
