import {
  AnimationButton,
  Colors,
  Icon,
  windowHeight,
  windowWidth,
} from 'green-native-ts';
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
import {useNavigation, useRoute} from '@react-navigation/native';
import {CardInfo} from '~/components/cardInfo';
import {Animated} from 'react-native';
import {
  animationPress,
  animationPressIn,
  animationPressOut,
} from '~/animation/buttonZoom';
import {useDispatch, useSelector} from 'react-redux';
import {saveCardData, setDataCard} from '~/redux/reducers/cardSlice';
import {useState} from 'react';

export const DeliveryScreen = (): JSX.Element => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  let ANIM_PRESS: any = new Animated.Value(1);

  const cardData = useSelector(state => state.card.data);

  const [address, setAddress] = useState('');

  // Price
  const getTotalPrice = () => {
    let totalPrice = 0;
    if (cardData !== null) {
      for (let i = 0; i < cardData.length; i++) {
        totalPrice =
          totalPrice +
          parseInt(cardData[i]?.item?.price) * parseInt(cardData[i]?.total);
      }
    }
    return totalPrice;
  };

  // Render
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
          text={language.Delivery}
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

      <View style={[primaryStyles.mv10, primaryStyles.ph15]}>
        <Text
          style={[
            primaryStyles.text16,
            primaryStyles.textBlack,
            {fontFamily: appConfig.fonts.primaryFontBold},
          ]}>
          {language.Address}
        </Text>
      </View>

      <View style={[primaryStyles.ph15, primaryStyles.centerRow]}>
        <View
          style={[
            primaryStyles.center,
            {
              backgroundColor: appConfig.colors.primaryColorSecond,
              height: 60,
              width: 60,
              borderRadius: 12,
            },
          ]}>
          <Icon
            type="MaterialCommunityIcons"
            name="map-marker"
            size={32}
            color={appConfig.colors.primaryColor}
          />
        </View>

        {address === '' && (
          <TouchableOpacity style={[primaryStyles.ph15]}>
            <Text
              style={[
                primaryStyles.text16,
                {fontFamily: appConfig.fonts.primaryFont},
              ]}>
              {language.AddAddress}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={[primaryStyles.full]} />

      <View style={[primaryStyles.mv10, primaryStyles.ph15]}></View>

      <View
        style={[
          primaryStyles.ph15,
          primaryStyles.pv05,
          {borderTopWidth: 1, borderColor: Colors.trans10},
        ]}>
        <CardInfo subTotal={getTotalPrice()} toTal={getTotalPrice()} />
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
