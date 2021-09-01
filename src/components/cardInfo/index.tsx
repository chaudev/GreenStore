import {Icon, parseMoney} from 'green-native-ts';
import React from 'react';
import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {appConfig, language} from '~/config';
import {primaryStyles} from '~/styles';

export const CardInfo = ({
  subTotal,
  toTal,
}: {
  subTotal: any;
  toTal: any;
}): JSX.Element => {
  const [textSearch, setTextSearch] = useState('');

  return (
    <View
      style={[
        {
          width: '100%',
        },
        primaryStyles.pv10,
      ]}>
      <View style={[primaryStyles.spaceBetweenRow]}>
        <Text
          style={{
            fontFamily: appConfig.fonts.primaryFont,
            color: '#000',
          }}>
          {language.Subtotal}
        </Text>
        <Text
          style={{
            fontFamily: appConfig.fonts.primaryFont,
            color: '#000',
          }}>
          {parseMoney(subTotal)}đ
        </Text>
      </View>

      <View style={[primaryStyles.spaceBetweenRow, primaryStyles.mt10]}>
        <Text
          style={{
            fontFamily: appConfig.fonts.primaryFont,
            color: '#000',
          }}>
          {language.Total}
        </Text>
        <Text
          style={{
            fontFamily: appConfig.fonts.primaryFont,
            color: '#000',
          }}>
          {parseMoney(toTal)}đ
        </Text>
      </View>
    </View>
  );
};
