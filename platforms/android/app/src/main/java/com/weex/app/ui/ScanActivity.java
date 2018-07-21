package com.weex.app.ui;

import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.view.View;
import android.widget.ImageView;

import com.google.zxing.client.android.Intents;
import com.journeyapps.barcodescanner.CaptureManager;
import com.journeyapps.barcodescanner.DecoratedBarcodeView;
import com.weex.app.R;
import com.weex.app.util.scan.CodeUtils;
import com.weex.app.util.scan.ImageUtil;

/**
 * 创建者     CJR
 * 创建时间   2018-07-17 09:32
 * 描述
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */

/**
 * 创建者     CJR
 * 创建时间   2018-07-16 15:32
 * 描述
 * <p>
 * 更新者     $Author$
 * 更新时间   $Date$
 * 更新描述
 *
 * @author CJR
 */
public class ScanActivity extends AppCompatActivity {

    private CaptureManager       capture;
    private DecoratedBarcodeView barcodeScannerView;

    /**
     * 选择系统图片Request Code
     */
    public static final int REQUEST_IMAGE = 112;

    /**
     * 手电筒的ImageView
     */
    private ImageView mLightIv;

    /**
     * 当前手电筒的状态, true表示开启状态; false 表示关闭状态
     */
    private boolean mLisghtState;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_scan);

        barcodeScannerView = (DecoratedBarcodeView) findViewById(R.id.zxing_barcode_scanner);

        capture = new CaptureManager(this, barcodeScannerView);
        capture.initializeFromIntent(getIntent(), savedInstanceState);
        capture.decode();

        initView();
        initData();
        initListener();
    }

    protected void initView() {
        mLightIv = (ImageView) findViewById(R.id.activity_scan_light_iv);
    }

    protected void initData() {

    }

    protected void initListener() {
        //  回退键
        findViewById(R.id.activity_scan_back_iv).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        //  手电筒的开关
        findViewById(R.id.activity_scan_open_light_container_ll)
                .setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        //  更新状态
                        mLisghtState = !mLisghtState;
                        if (mLisghtState) {
                            barcodeScannerView.setTorchOn();
                            mLightIv.setImageResource(R.drawable.ic_open);
                        } else {
                            barcodeScannerView.setTorchOff();
                            mLightIv.setImageResource(R.drawable.ic_close);
                        }
                    }
                });

        //  从相册中选择图片
        findViewById(R.id.activity_scan_select_pic_container_ll)
                .setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        selectPic();
                    }
                });
    }

    /**
     * 作者：
     * 链接：https://www.imooc.com/article/details/id/20974
     * 来源：慕课网
     * <p>
     * 选择图片进行解析
     */
    protected void selectPic() {
        Intent intent = new Intent(Intent.ACTION_PICK,
                android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
        startActivityForResult(intent, REQUEST_IMAGE);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == REQUEST_IMAGE) {
            //  解析选择的二维码图片
            if (data != null) {
                Uri uri = data.getData();
                try {
                    CodeUtils.analyzeBitmap(
                            ImageUtil.getImageAbsolutePath(this, uri), mAnalyzeCallback);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        capture.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        capture.onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        capture.onDestroy();
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        capture.onSaveInstanceState(outState);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode,
                                           @NonNull String permissions[],
                                           @NonNull int[] grantResults) {
        capture.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        return barcodeScannerView.onKeyDown(keyCode, event) || super.onKeyDown
                (keyCode, event);
    }

    /**
     * 从CaptureActivity拷贝过来的
     * <p>
     * 二维码解析回调函数
     */
    CodeUtils.AnalyzeCallback mAnalyzeCallback = new CodeUtils.AnalyzeCallback() {

        @Override
        public void onAnalyzeSuccess(Bitmap mBitmap, String result) {
            Intent resultIntent = new Intent();
            resultIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET);
            resultIntent.putExtra(Intents.Scan.RESULT, result);
            Bundle bundle = new Bundle();
            bundle.putInt(CodeUtils.RESULT_TYPE, CodeUtils.RESULT_SUCCESS);
            resultIntent.putExtras(bundle);
            ScanActivity.this.setResult(RESULT_OK, resultIntent);
            ScanActivity.this.finish();
        }

        @Override
        public void onAnalyzeFailed() {
            Intent resultIntent = new Intent();
            resultIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET);
            resultIntent.putExtra(Intents.Scan.RESULT, "");
            Bundle bundle = new Bundle();
            bundle.putInt(CodeUtils.RESULT_TYPE, CodeUtils.RESULT_FAILED);
            resultIntent.putExtras(bundle);
            ScanActivity.this.setResult(RESULT_OK, resultIntent);
            ScanActivity.this.finish();
        }
    };

}
