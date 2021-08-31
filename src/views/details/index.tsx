import {Icon, windowHeight, windowWidth} from 'green-native-ts';
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Search} from '~/components/search';
import {Slide} from '~/components/slide';
import {appConfig, language} from '~/config';
import {Category} from '~/components/category';

import {primaryStyles} from '~/styles';
import {Top} from '~/components/top';
import {Products} from '~/components/products';

import {useRoute, useNavigation} from '@react-navigation/native';
import {ProductInfo} from '~/components/productInfo';
import {useState} from 'react';
import {ProductInfoContent} from '~/components/productInfoContent';
import {ProductInfoButton} from '~/components/productInfoButton';
import {products} from '../home/data';

export const DetailScreen = (): JSX.Element => {
  const insets = useSafeAreaInsets();

  const route = useRoute();
  const navigation = useNavigation();

  const [number, setNumber] = useState(1);

  console.log(route.params);

  return (
    <View
      style={[
        {
          paddingTop: insets.top + 20,
        },
        primaryStyles.full,
      ]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={[primaryStyles.full]}>
        <View style={[primaryStyles.ph15, primaryStyles.spaceBetweenRow]}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              type="MaterialIcons"
              name="arrow-back"
              color="#101010"
              size={26}
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <Icon
              type="MaterialCommunityIcons"
              name={true ? 'heart-outline' : 'heart'}
              color="#101010"
              size={26}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[
            primaryStyles.mv15,
            primaryStyles.ph15,
            primaryStyles.center,
          ]}>
          <Image
            resizeMode="cover"
            source={route.params.image}
            style={{width: windowWidth - 100, height: windowWidth - 100}}
          />
        </View>

        <View style={[primaryStyles.ph15, primaryStyles.center]}>
          <Text
            style={[
              primaryStyles.text20,
              primaryStyles.textBlack,
              {fontFamily: appConfig.fonts.primaryFontBold},
            ]}>
            {route.params.title}
          </Text>
        </View>

        <View
          style={[
            primaryStyles.mv15,
            primaryStyles.ph15,
            primaryStyles.center,
          ]}>
          <ProductInfo />
        </View>

        <View style={[primaryStyles.ph15, primaryStyles.mb10]}>
          <ProductInfoContent
            number={number}
            content={route.params.content}
            setNumber={(param: number) => {
              setNumber(param);
            }}
          />
        </View>

        <Text
          style={[
            primaryStyles.text18,
            primaryStyles.ph15,
            {fontFamily: appConfig.fonts.primaryFontBold},
          ]}>
          {language.Top}
        </Text>

        <View style={[primaryStyles.mv15, {}]}>
          <Top
            data={[products[0], products[2], products[7], products[5]]}
            height={200}
          />
        </View>
      </ScrollView>

      <View>
        <ProductInfoButton price={route.params.price} onPress={() => {}} />
      </View>
    </View>
  );
};
