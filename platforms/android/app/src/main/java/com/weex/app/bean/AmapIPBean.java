package com.weex.app.bean;

/**
 * 创建者     CJR
 * 创建时间   2018-08-01 16:33
 * 描述       使用高德IP定位返回的结果
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class AmapIPBean {

    /**
     * province : 广东省
     * city : 深圳市
     * adcode : 440300
     * infocode : 10000
     * rectangle : 113.9629412,22.4627142;114.2106056,22.61394155
     * status : 1
     * info : OK
     */
    public String province;
    public String city;
    public String adcode;
    public String infocode;
    public String rectangle;
    public String status;
    public String info;

    @Override
    public String toString() {
        return "province = " + province +
                "; city= " + city +
                "; adcode= " + adcode +
                ", infocode= " + infocode +
                ", rectangle= " + rectangle +
                ", status= " + status +
                ", info= " + info
                ;
    }
}
