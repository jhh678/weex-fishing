package com.weex.app.util;


import io.reactivex.FlowableTransformer;
import io.reactivex.ObservableTransformer;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.schedulers.Schedulers;

/**
 * 创建者     CJR
 * 创建时间   2017-09-19 15:19
 * 描述	      RxJava线程调度管理, 这里是从T-MVP-master里复制出来的
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 */
public class RxSchedulers {
    private static final FlowableTransformer<?, ?> mTransformer
            = observable -> observable
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread());

    /**
     * Flowable类型的, 支持背压
     */
    @SuppressWarnings("unchecked")
    public static <T> FlowableTransformer<T, T> io_main() {
        return (FlowableTransformer<T, T>) mTransformer;
    }


    private static final ObservableTransformer<?, ?> mObserbleTransformer
            = observable -> observable
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread());

    /**
     * Observable类型的, 不支持背压
     */
    @SuppressWarnings("unchecked")
    public static <T> ObservableTransformer<T, T> normalSchedulers() {
        return (ObservableTransformer<T, T>) mObserbleTransformer;
    }

}
