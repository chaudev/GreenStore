import {GreenStyles} from 'green-native-ts';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {appConfig} from '~/config';
import {primaryStyles} from '~/styles';

export const Numberic = ({
  number,
  setNumber,
}: {
  number: number;
  setNumber: any;
}): JSX.Element => {
  const buttonSize: number = 45;

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
            backgroundColor: appConfig.colors.primaryColorSecond,
            width: buttonSize,
            height: buttonSize,
            borderRadius: 900,
          },
          GreenStyles.ShadowBox,
          primaryStyles.center,
        ]}>
        <Text
          style={{
            color: appConfig.colors.primaryColor,
            fontSize: 34,
            marginTop: -3,
          }}>
          +
        </Text>
      </TouchableOpacity>

      <View style={[primaryStyles.mv15]}>
        <Text
          style={{
            color: appConfig.colors.primaryColor,
            fontSize: 34,
            marginTop: -3,
            fontFamily: appConfig.fonts.primaryFontBold,
          }}>
          {number}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          if (number > 1) {
            setNumber(number - 1);
          }
        }}
        activeOpacity={0.5}
        style={[
          {
            backgroundColor: appConfig.colors.primaryColorSecond,
            width: buttonSize,
            height: buttonSize,
            borderRadius: 900,
          },
          GreenStyles.ShadowBox,
          primaryStyles.center,
        ]}>
        <Text
          style={{
            color: appConfig.colors.primaryColor,
            fontSize: 48,
            marginTop: -14,
          }}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
};
