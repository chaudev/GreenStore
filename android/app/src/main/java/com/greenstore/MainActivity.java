package com.greenstore;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
//import com.jaeger.library.StatusBarUtil;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this, R.layout.launch_screen);
//    StatusBarUtil.setTransparent(this);
    super.onCreate(savedInstanceState);
  }

  @Override
  protected String getMainComponentName() {
    return "GreenStore";
  }
}
