package com.weex.app.module;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import com.weex.app.WXPageActivity;
import com.weex.app.util.LogUtils;

/**
 * 创建者     CJR
 * 创建时间   2018-08-28 10:19
 * 描述       将 onBack事件传给h5, 由h5处理, 这里给h5 一个退出app的方法; 目前是单Activiyt的app, 所以可以
 * *         可以直接结束 WXPageActivity就可以了, 如果做成了多Activity的, 需要加入一个管理Activity的类,
 * *         可以从开源中国拷贝, 在BaseActivity的onCreate中将启动的Activity记录, 就可以实现退出所有
 * *         Activity
 * *         onBack事件的传递参考: https://blog.csdn.net/violetjack0808/article/details/74002599
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class CloseModule extends WXModule {

  @JSMethod(uiThread = false)
  public void closeApp() {
    LogUtils.myLog("closeApp方法调用了~");
    WXPageActivity act = (WXPageActivity) mWXSDKInstance.getContext();
    act.finish();
  }
}
