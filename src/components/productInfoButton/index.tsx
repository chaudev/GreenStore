import {Icon, windowWidth, parseMoney} from 'green-native-ts';
import React from 'react';
import {useState} from 'react';
import {Animated, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {
  animationPress,
  animationPressIn,
  animationPressOut,
} from '~/animation/buttonZoom';
import {appConfig, language} from '~/config';
import {primaryStyles} from '~/styles';

export const ProductInfoButton = ({
  price,
  onPress,
}: {
  price: number;
  onPress: any;
}): JSX.Element => {
  let ANIM_PRESS: any = new Animated.Value(1);

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
        primaryStyles.mv10,
      ]}>
      <Animated.View
        style={[
          {
            height: 50,
            transform: [{scale: ANIM_PRESS}],
            borderRadius: 20,
            backgroundColor: appConfig.colors.primaryColor,
          },
          primaryStyles.center,
        ]}>
        <TouchableOpacity
          onPressIn={() => {
            animationPressIn(ANIM_PRESS);
          }}
          onPressOut={() => {
            animationPressOut(ANIM_PRESS);
          }}
          onPress={() => {
            animationPress(ANIM_PRESS, () => {
              //
            });
          }}
          activeOpacity={0.5}
          style={[
            primaryStyles.ph20,
            primaryStyles.center,
            primaryStyles.full,
          ]}>
          <Text
            style={[
              primaryStyles.text16,
              primaryStyles.textWhite,
              {
                fontFamily: appConfig.fonts.primaryFontBold,
              },
            ]}>
            {language.Addtocard}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <View
        style={[primaryStyles.ph10, primaryStyles.center, primaryStyles.full]}>
        <Text
          style={[
            {
              color: appConfig.colors.primaryColor,
              fontFamily: appConfig.fonts.primaryFontBold,
              fontSize: 30,
            },
          ]}>
          {parseMoney(price)}đ
        </Text>
      </View>
    </View>
  );
};
