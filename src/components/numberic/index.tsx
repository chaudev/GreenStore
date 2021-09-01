import {GreenStyles} from 'green-native-ts';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {appConfig} from '~/config';
import {primaryStyles} from '~/styles';

export const Numberic = ({
  number,
  setNumber,
  scale,
}: {
  number: number;
  setNumber: any;
  scale: number;
}): JSX.Element => {
  const buttonSize: number = 45 / scale || 45 / 1;

  return (
    <View style={[primaryStyles.center]}>
      <TouchableOpacity
        onPress={() => {
          if (number < 100) {
            setNumber(number + 1);
          }
        }}
        activeOpacity={0.5}
        style={[
          {
            backgroundColor: appConfig.colors.primaryColor,
            width: buttonSize,
            height: buttonSize,
            borderRadius: 900,
          },
          // GreenStyles.ShadowBox,
          primaryStyles.center,
        ]}>
        <Text
          style={{
            color: appConfig.colors.primaryColorSecond,
            fontSize: 30 / scale || 30 / 1,
            width: buttonSize,
            height: buttonSize,
            textAlign: 'center',
          }}>
          +
        </Text>
      </TouchableOpacity>

      <View style={[primaryStyles.mv5]}>
        <Text
          style={{
            color: appConfig.colors.primaryColor,
            fontSize: 34 / scale || 45 / 1,
            marginTop: -3,
            fontFamily: appConfig.fonts.primaryFontBold,
          }}>
          {number}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          setNumber(number - 1);
        }}
        activeOpacity={0.5}
        style={[
          {
            backgroundColor: appConfig.colors.primaryColor,
            width: buttonSize,
            height: buttonSize,
            borderRadius: 900,
          },
          // GreenStyles.ShadowBox,
          primaryStyles.center,
        ]}>
        <Text
          style={{
            color: appConfig.colors.primaryColorSecond,
            fontSize: 48 / scale || 45 / 1,
            width: buttonSize,
            height: buttonSize,
            marginTop: -15,
            textAlign: 'center',
          }}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
};
