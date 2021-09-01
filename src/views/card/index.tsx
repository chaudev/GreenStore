import {AnimationButton, windowHeight, windowWidth} from 'green-native-ts';
import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Search} from '~/components/search';
import {Slide} from '~/components/slide';
import {appConfig, language} from '~/config';
import {Category} from '~/components/category';

import {primaryStyles} from '~/styles';
import {Top} from '~/components/top';
import {Products} from '~/components/products';
import {CardList} from '~/components/cardList';
import {products} from '../home/data';
import {Header} from '~/components/header';
import {useNavigation} from '@react-navigation/native';
import {CardInfo} from '~/components/cardInfo';
import {Animated} from 'react-native';
import {
  animationPress,
  animationPressIn,
  animationPressOut,
} from '~/animation/buttonZoom';

export const CardScreen = (): JSX.Element => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  let ANIM_PRESS: any = new Animated.Value(1);

  return (
    <View
      style={[
        {
          paddingTop: insets.top + 20,
        },
        primaryStyles.full,
        primaryStyles.backgroundWhite,
      ]}>
      <StatusBar barStyle="dark-content" />

      <View style={[primaryStyles.ph15]}>
        <Header
          text={language.Card}
          fonstSize={16}
          showLeft={true}
          typeLeft="MaterialIcons"
          nameLeft="arrow-back"
          sizeLeft={26}
          showRight={false}
          fontFamily={appConfig.fonts.primaryFontBold}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />
      </View>

      <View
        style={[primaryStyles.mt15, primaryStyles.ph15, primaryStyles.full]}>
        <CardList
          data={[
            products[0],
            products[1],
            products[2],
            products[6],
            products[9],
          ]}
        />
      </View>

      <View style={[primaryStyles.ph15, primaryStyles.mv10]}>
        <CardInfo subTotal={350000} toTal={380000} />
      </View>

      <View style={[primaryStyles.ph15]}>
        <Animated.View
          style={[
            {
              width: windowWidth - 30,
              height: 45,
              transform: [{scale: ANIM_PRESS}],
              borderRadius: 12,
              backgroundColor: appConfig.colors.primaryColor,
            },
            primaryStyles.center,
            primaryStyles.mb15,
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
                //
              });
            }}
            style={[primaryStyles.full, primaryStyles.center, {width: '100%'}]}>
            <Text
              style={[
                primaryStyles.textWhite,
                primaryStyles.text16,
                {
                  textTransform: 'uppercase',
                  fontFamily: appConfig.fonts.primaryFontBold,
                },
              ]}>
              {language.Payment}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};
