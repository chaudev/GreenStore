import {parseMoney, windowHeight, windowWidth} from 'green-native-ts';
import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  animationPress,
  animationPressIn,
  animationPressOut,
} from '~/animation/buttonZoom';
import {appConfig} from '~/config';
import {primaryStyles} from '~/styles';
import {useNavigation} from '@react-navigation/native';
import {appRouter} from '~/navigation/appRouter';
import {Numberic} from '../numberic';

export const CardItem = ({item, data}: {item: any; data: any}): JSX.Element => {
  const navigation = useNavigation();
  const imageSize = 90;

  let ANIM_PRESS: any = new Animated.Value(1);

  const isFinal = (i: any, d: any): boolean => {
    let index = d.indexOf(i);
    return index + 1 === d.length ? true : false;
  };

  console.log('item: ', item);

  // Render
  return (
    <Animated.View
      style={[
        {
          width: '100%',
          transform: [{scale: ANIM_PRESS}],
          borderRadius: 12,
          marginRight: isFinal(item, data) ? 15 : 0,
          backgroundColor: appConfig.colors.primaryColorSecond,
        },
        primaryStyles.mb10,
        primaryStyles.ph15,
        primaryStyles.pv05,
        primaryStyles.centerRow,
      ]}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPressIn={() => {
          animationPressIn(ANIM_PRESS);
        }}
        onPressOut={() => {
          animationPressOut(ANIM_PRESS);
        }}
        onPress={() => {
          animationPress(ANIM_PRESS, () => {
            navigation.navigate(appRouter.DETAIL, item);
          });
        }}
        style={[primaryStyles.centerRow, primaryStyles.full]}>
        {item?.image !== undefined && item?.image !== null && (
          <Image
            resizeMode="contain"
            source={item?.image}
            style={{width: imageSize, height: imageSize}}
          />
        )}

        <View style={[primaryStyles.ph10, primaryStyles.full]}>
          <Text
            style={[
              primaryStyles.textBlack,
              primaryStyles.text14,
              primaryStyles.mt5,
              primaryStyles.textBold,
              primaryStyles.mt10,
            ]}>
            {item?.title || ''}
          </Text>

          <Text
            style={[
              primaryStyles.mt5,
              primaryStyles.textBold,
              primaryStyles.text18,
              {
                color: appConfig.colors.primaryColor,
              },
            ]}>
            {parseMoney(item?.price || 0)}đ
          </Text>
        </View>
      </TouchableOpacity>
      <View style={[]}>
        <Numberic scale={1.8} number={10} setNumber={() => {}} />
      </View>
    </Animated.View>
  );
};
