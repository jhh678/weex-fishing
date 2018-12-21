package com.weex.app.extend;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXVContainer;
import com.taobao.weex.ui.component.WXWeb;

/**
 * 创建者     CJR
 * 创建时间   2018-08-21 15:48
 * 描述
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class TtyWeb extends WXWeb {

  public TtyWeb(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
    super(instance, dom, parent, isLazy);
  }

  protected void createWebView() {
    mWebView = new TtyWebView(getContext());
  }
}
