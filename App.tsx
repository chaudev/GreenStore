import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import store from '~/redux';
import {Provider} from 'react-redux';
import {AppNavigator} from '~/navigation/appNavigator';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreAllLogs();

const App = () => {
  SplashScreen.hide();

  return (
    <Provider store={store}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <AppNavigator />
    </Provider>
  );
};

export default App;
