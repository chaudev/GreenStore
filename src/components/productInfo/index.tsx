import {Icon} from 'green-native-ts';
import React from 'react';
import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {appConfig, language} from '~/config';
import {primaryStyles} from '~/styles';

export const ProductInfo = (): JSX.Element => {
  const [textSearch, setTextSearch] = useState('');

  return (
    <View
      style={[
        {
          width: '100%',
          borderRadius: 30,
        },
        primaryStyles.centerRow,
        primaryStyles.ph15,
        primaryStyles.center,
      ]}>
      <View
        style={[primaryStyles.ph10, primaryStyles.center, primaryStyles.full]}>
        <Text
          style={[
            primaryStyles.text16,
            {
              fontFamily: appConfig.fonts.primaryFont,
            },
          ]}>
          294,9kcal
        </Text>
        <Text
          style={[
            primaryStyles.text12,
            {
              color: appConfig.colors.primaryColor,
              fontFamily: appConfig.fonts.primaryFontBold,
              textTransform: 'uppercase',
            },
          ]}>
          {language.Energy}
        </Text>
      </View>

      <View
        style={[primaryStyles.ph10, primaryStyles.center, primaryStyles.full]}>
        <Text
          style={[
            primaryStyles.text16,
            {
              fontFamily: appConfig.fonts.primaryFont,
            },
          ]}>
          100g
        </Text>
        <Text
          style={[
            primaryStyles.text12,
            {
              color: appConfig.colors.primaryColor,
              fontFamily: appConfig.fonts.primaryFontBold,
              textTransform: 'uppercase',
            },
          ]}>
          {language.Weight}
        </Text>
      </View>

      <View
        style={[primaryStyles.ph10, primaryStyles.center, primaryStyles.full]}>
        <Text
          style={[
            primaryStyles.text16,
            {
              fontFamily: appConfig.fonts.primaryFont,
            },
          ]}>
          {language.Stocking}
        </Text>
        <Text
          style={[
            primaryStyles.text12,
            {
              color: appConfig.colors.primaryColor,
              fontFamily: appConfig.fonts.primaryFontBold,
              textTransform: 'uppercase',
            },
          ]}>
          {language.Status}
        </Text>
      </View>
    </View>
  );
};
