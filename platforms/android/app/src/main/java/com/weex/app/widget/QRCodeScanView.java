/*
 * Copyright (C) 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.weex.app.widget;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;

import com.journeyapps.barcodescanner.CameraPreview;
import com.journeyapps.barcodescanner.ViewfinderView;
import com.weex.app.R;

/**
 * This view is overlaid on top of the camera preview. It adds the viewfinder rectangle and partial
 * transparency outside it, as well as the laser scanner animation and result points.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 */
public class QRCodeScanView extends ViewfinderView {
    protected static final String TAG = QRCodeScanView.class.getSimpleName();

    private static final int OPAQUE = 0xFF;

    private final Paint mPaint;

    // 扫描线每次draw移动的距离
    private int    mMoveStepDistance;
    // 扫描线
    private Bitmap mScanLineBitmap;

    // 扫描框边角颜色
    private int mCornerColor;
    // 扫描框边角的长度
    private int mCornerLength;
    // 扫描框边角宽度
    private int mCornerSize;

    private Rect    mFramingRect;
    private float   mGridScanLineBottom;
    private float   mScanLineTop;
    private float   mScanLineLeft;
    private float   mHalfCornerSize;
    private int     mScanLineMargin;
    private int     mScanLineColor;
    private int     mScanLineSize;
    private boolean mIsScanLineReverse;
    private int     mAnimDelayTime;
    private int     mAnimTime;

    //  add CJR 遮罩颜色
    private int mMaskColor;

    /**
     * 网格扫描
     */
    private Bitmap mGridScanLineBitmap;

    /**
     * 扫描边框 线宽度
     */
    private int mBorderSize;

    /**
     * 扫描边框颜色
     */
    private int mBorderColor;

    protected CameraPreview cameraPreview;

    // Cache the framingRect and previewFramingRect, so that we can still draw it after the preview
    // stopped.
    protected Rect previewFramingRect;

    // This constructor is used when the class is built from an XML resource.
    public QRCodeScanView(Context context, AttributeSet attrs) {
        super(context, attrs);

        // Initialize these once for performance rather than calling them every time in onDraw().
        mPaint = new Paint(Paint.ANTI_ALIAS_FLAG);

        Resources resources = getResources();

        TypedArray ta = context.obtainStyledAttributes(attrs, R.styleable.QRCodeView);

        // 扫描框边角颜色
        mCornerColor = ta.getColor(R.styleable.QRCodeView_inner_corner_color, Color.WHITE);
        // 扫描框边角长度
        mCornerLength = (int) ta.getDimension(R.styleable.QRCodeView_inner_corner_length
                , dip2px(getContext(), 20));
        // 扫描框边角宽度
        mCornerSize = (int) ta.getDimension(R.styleable.QRCodeView_inner_corner_width
                , dip2px(getContext(), 3));

        //  扫描边框线 的宽度, 默认1dp
        mBorderSize = (int) ta.getDimension(R.styleable.QRCodeView_qrcv_border_size
                , dip2px(getContext(), 1));

        //  扫描边框的颜色, 默认白色
        mBorderColor = ta.getColor(R.styleable.QRCodeView_qrcv_border_color, Color.WHITE);

        // 遮罩颜色, 默认0x33ffffff
        mMaskColor = ta.getColor(R.styleable.QRCodeView_qrcv_mask_color, 0x33FFFFFF);

        // 网格扫描的bitmap
        Drawable drawable = ta.getDrawable(R.styleable.QRCodeView_qrcv_grid_scan_drawable);
        if (drawable != null) {
            mGridScanLineBitmap = ((BitmapDrawable) drawable).getBitmap();
        }

        // 扫描线的bitmap
        mScanLineBitmap = BitmapFactory.decodeResource(getResources()
                , ta.getResourceId(R.styleable.QRCodeView_inner_scan_bitmap,
                        android.R.drawable.divider_horizontal_dark));

        //  扫描线到两边的margin
        mScanLineMargin = (int) ta.getDimension(R.styleable.QRCodeView_qrcv_scanline_margin, 0);

        //  扫描线的颜色, 如果没有用bitmap, 自己画的时候的颜色, 默认白色
        mScanLineColor = ta.getColor(R.styleable.QRCodeView_qrcv_scanline_color, Color.WHITE);

        //  扫描线宽度, 默认1dp
        mScanLineSize = (int) ta.getDimension(R.styleable.QRCodeView_qrcv_border_size
                , dip2px(getContext(), 1));

        //  是否来回扫描, ture就是往返, false就一直是往没有返, 网格图片只有往
        mIsScanLineReverse = ta.getBoolean(R.styleable.QRCodeView_qrcv_scanline_reverse, true);

        //  扫描线的动画时间, 默认1000
        mAnimTime = ta.getInt(R.styleable.QRCodeView_qrcv_anim_time, 1000);

        ta.recycle();

        // 每次移动的距离
        mMoveStepDistance = dip2px(getContext(), 2);
        mHalfCornerSize = 1.0f * mCornerSize / 2;
    }

    public void setCameraPreview(CameraPreview view) {
        this.cameraPreview = view;
        view.addStateListener(new CameraPreview.StateListener() {
            @Override
            public void previewSized() {
                refreshSizes();
                mGridScanLineBottom = mScanLineTop = mFramingRect.top + mHalfCornerSize + 0.5f;
                mAnimDelayTime = (int) ((1.0f * mAnimTime * mMoveStepDistance)
                        / mFramingRect.height());
                invalidate();
            }

            @Override
            public void previewStarted() {

            }

            @Override
            public void previewStopped() {

            }

            @Override
            public void cameraError(Exception error) {

            }

        });
    }

    protected void refreshSizes() {
        if (cameraPreview == null) {
            return;
        }
        Rect framingRect = cameraPreview.getFramingRect();
        Rect previewFramingRect = cameraPreview.getPreviewFramingRect();
        if (framingRect != null && previewFramingRect != null) {
            this.mFramingRect = framingRect;
            this.previewFramingRect = previewFramingRect;
        }
    }

    @Override
    public void onDraw(Canvas canvas) {
        refreshSizes();
        if (mFramingRect == null) {
            return;
        }

        //===============start 代码来自 BGAQRCode-Android===============
        // 画遮罩层
        drawMask(canvas);

        // 画边框线
        drawBorderLine(canvas);

        // 画四个直角的线
        drawCornerLine(canvas);

        // 画扫描线
        drawScanLine(canvas);

        // 移动扫描线的位置
        moveScanLine();
        //===============start 以上代码来自 BGAQRCode-Android===============
        postInvalidateDelayed(mAnimDelayTime, mFramingRect.left, mFramingRect.top,
                mFramingRect.right, mFramingRect.bottom);
    }

    /**
     * 画遮罩层
     * <p>
     * 搬自 https://github.com/bingoogolapple/BGAQRCode-Android
     * zxingdemo 的 ScanBoxView中的方法
     *
     * @param canvas
     */
    private void drawMask(Canvas canvas) {
        int width = canvas.getWidth();
        int height = canvas.getHeight();

        if (mMaskColor != Color.TRANSPARENT) {
            mPaint.setStyle(Paint.Style.FILL);
            mPaint.setColor(mMaskColor);
            canvas.drawRect(0, 0, width, mFramingRect.top, mPaint);
            canvas.drawRect(0, mFramingRect.top, mFramingRect.left, mFramingRect.bottom + 1,
                    mPaint);
            canvas.drawRect(mFramingRect.right + 1, mFramingRect.top,
                    width, mFramingRect.bottom + 1, mPaint);
            canvas.drawRect(0, mFramingRect.bottom + 1, width, height, mPaint);
        }
    }


    /**
     * 画边框线
     *
     * @param canvas
     */
    private void drawBorderLine(Canvas canvas) {
        if (mBorderSize > 0) {
            mPaint.setStyle(Paint.Style.STROKE);
            mPaint.setColor(mBorderColor);
            mPaint.setStrokeWidth(mBorderSize);
            canvas.drawRect(mFramingRect, mPaint);
        }
    }

    /**
     * 画四个直角的线
     *
     * @param canvas
     */
    private void drawCornerLine(Canvas canvas) {
        if (mHalfCornerSize > 0) {
            mPaint.setStyle(Paint.Style.STROKE);
            mPaint.setColor(mCornerColor);
            mPaint.setStrokeWidth(mCornerSize);
            canvas.drawLine(mFramingRect.left - mHalfCornerSize, mFramingRect.top,
                    mFramingRect.left - mHalfCornerSize + mCornerLength, mFramingRect.top, mPaint);
            canvas.drawLine(mFramingRect.left, mFramingRect.top - mHalfCornerSize, mFramingRect
                            .left,
                    mFramingRect.top - mHalfCornerSize + mCornerLength, mPaint);
            canvas.drawLine(mFramingRect.right + mHalfCornerSize, mFramingRect.top,
                    mFramingRect.right + mHalfCornerSize - mCornerLength, mFramingRect.top, mPaint);
            canvas.drawLine(mFramingRect.right, mFramingRect.top - mHalfCornerSize,
                    mFramingRect.right, mFramingRect.top - mHalfCornerSize + mCornerLength, mPaint);

            canvas.drawLine(mFramingRect.left - mHalfCornerSize, mFramingRect.bottom,
                    mFramingRect.left - mHalfCornerSize + mCornerLength, mFramingRect.bottom,
                    mPaint);
            canvas.drawLine(mFramingRect.left, mFramingRect.bottom + mHalfCornerSize,
                    mFramingRect.left, mFramingRect.bottom + mHalfCornerSize - mCornerLength,
                    mPaint);
            canvas.drawLine(mFramingRect.right + mHalfCornerSize, mFramingRect.bottom,
                    mFramingRect.right + mHalfCornerSize - mCornerLength, mFramingRect.bottom,
                    mPaint);
            canvas.drawLine(mFramingRect.right, mFramingRect.bottom + mHalfCornerSize,
                    mFramingRect.right, mFramingRect.bottom + mHalfCornerSize - mCornerLength,
                    mPaint);
        }
    }

    /**
     * 画扫描线
     *
     * @param canvas
     */
    private void drawScanLine(Canvas canvas) {
        if (mGridScanLineBitmap != null) {
            RectF dstGridRectF = new RectF(
                    mFramingRect.left + mHalfCornerSize + mScanLineMargin,
                    mFramingRect.top + mHalfCornerSize + 0.5f,
                    mFramingRect.right - mHalfCornerSize - mScanLineMargin,
                    mGridScanLineBottom);

            Rect srcRect = new Rect(
                    0,
                    (int) (mGridScanLineBitmap.getHeight() - dstGridRectF.height()),
                    mGridScanLineBitmap.getWidth(),
                    mGridScanLineBitmap.getHeight());

            if (srcRect.top < 0) {
                srcRect.top = 0;
                dstGridRectF.top = dstGridRectF.bottom - srcRect.height();
            }

            canvas.drawBitmap(mGridScanLineBitmap, srcRect, dstGridRectF, mPaint);
        } else if (mScanLineBitmap != null) {
            RectF lineRect = new RectF(
                    mFramingRect.left + mHalfCornerSize + mScanLineMargin,
                    mScanLineTop,
                    mFramingRect.right - mHalfCornerSize - mScanLineMargin,
                    mScanLineTop + mScanLineBitmap.getHeight());
            canvas.drawBitmap(mScanLineBitmap, null, lineRect, mPaint);
        } else {
            mPaint.setStyle(Paint.Style.FILL);
            mPaint.setColor(mScanLineColor);
            canvas.drawRect(
                    mFramingRect.left + mHalfCornerSize + mScanLineMargin,
                    mScanLineTop,
                    mFramingRect.right - mHalfCornerSize - mScanLineMargin,
                    mScanLineTop + mScanLineSize,
                    mPaint);
        }
    }

    /**
     * 移动扫描线的位置
     */
    private void moveScanLine() {
        if (mGridScanLineBitmap == null) {
            // 处理非网格扫描图片的情况
            mScanLineTop += mMoveStepDistance;
            int scanLineSize = mScanLineSize;
            if (mScanLineBitmap != null) {
                scanLineSize = mScanLineBitmap.getHeight();
            }

            if (mIsScanLineReverse) {
                if (mScanLineTop + scanLineSize > mFramingRect.bottom - mHalfCornerSize
                        || mScanLineTop < mFramingRect.top + mHalfCornerSize) {
                    mMoveStepDistance = -mMoveStepDistance;
                }
            } else {
                if (mScanLineTop + scanLineSize > mFramingRect.bottom - mHalfCornerSize) {
                    mScanLineTop = mFramingRect.top + mCornerSize + 0.5f;
                }
            }
        } else {
            // 处理网格扫描图片的情况
            mGridScanLineBottom += mMoveStepDistance;
            if (mGridScanLineBottom > mFramingRect.bottom - mHalfCornerSize + mGridScanLineBitmap
                    .getHeight() / 3) {
                mGridScanLineBottom = mFramingRect.top + mHalfCornerSize + 0.5f;
            }

            //  全屏的扫描线
            /*mGridScanLineBottom += mMoveStepDistance;
            if (mGridScanLineBottom > getBottom() - mHalfCornerSize + mGridScanLineBitmap
            .getHeight() / 3) {
                mGridScanLineBottom = getTop() + 0.5f;
            }
            postInvalidateDelayed(mAnimDelayTime);*/
        }

    }

    /**
     * 根据手机的分辨率从 dp 的单位 转成为 px(像素)
     */
    public static int dip2px(Context context, float dpValue) {
        final float scale = context.getResources().getDisplayMetrics().density;
        return (int) (dpValue * scale + 0.5f);
    }

    //===============start 以上代码来自 BGAQRCode-Android===============

}
