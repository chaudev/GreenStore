import {Dimensions} from 'react-native';

export const {width: dW, height: dH} = Dimensions.get('window');

export const language = require('~/language/vietnamease.json');

export const appConfig = {
  powerBy: 'Nguyễn Phúc Bảo Châu',
  url: 'https://grube02.000webhostapp.com',
  oneSignalID: '',
  appName: 'Green',
  appNameSeconds: 'Store',
  appNameFull: 'Green Store',
  dW: dW,
  dH: dH,
  fonts: {
    primaryFont: 'UTM DaxMedium_0',
    primaryFontBold: 'UTM DaxBold_0',
  },
  colors: {
    primaryColor: '#f17c3b',
    primaryColorSecond: '#f8f8f8',
    black: '#000',
    white: '#fff',
    transparent: 'rgba(0,0,0,0)',
    trans05: 'rgba(0,0,0,0.05)',
    trans10: 'rgba(0,0,0,0.1)',
    trans20: 'rgba(0,0,0,0.2)',
    trans30: 'rgba(0,0,0,0.3)',
    trans40: 'rgba(0,0,0,0.3)',
    trans50: 'rgba(0,0,0,0.5)',
    homeButtonColor: '#e4f2e6',
    orange: '#f19335',
  },
};
