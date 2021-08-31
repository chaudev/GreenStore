import {windowHeight, windowWidth} from 'green-native-ts';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Search} from '~/components/search';
import {Slide} from '~/components/slide';
import {appConfig, language} from '~/config';
import {styles} from './styles';
import {Category} from '~/components/category';

import {categories, products, slides} from './data';
import {primaryStyles} from '~/styles';
import {Top} from '~/components/top';
import {Products} from '~/components/products';

export const HomeScreen = (): JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 20,
        },
      ]}>
      <StatusBar barStyle="dark-content" />

      <Text
        style={[
          {fontSize: 28, fontFamily: appConfig.fonts.primaryFont},
          primaryStyles.ph15,
        ]}>
        {appConfig.appName}
        <Text style={{fontFamily: appConfig.fonts.primaryFontBold}}>
          {' '}
          {appConfig.appNameSeconds}
        </Text>
      </Text>

      <View style={[styles.mv15, primaryStyles.ph15]}>
        <Search />
      </View>

      <Products
        ListHeaderComponent={
          <View
            style={{
              paddingHorizontal: 15,
            }}>
            <View style={[{height: 110}]}>
              <Slide data={slides} width={windowWidth - 30} height={110} />
            </View>

            <View style={[styles.mv15, {marginHorizontal: -15}]}>
              <Category data={categories} height={90} />
            </View>

            <Text
              style={[
                primaryStyles.text18,
                {fontFamily: appConfig.fonts.primaryFontBold},
              ]}>
              {language.Top}
            </Text>

            <View style={[styles.mv15, {marginHorizontal: -15}]}>
              <Top
                data={[products[0], products[2], products[7], products[5]]}
                height={200}
              />
            </View>

            <Text
              style={[
                primaryStyles.text18,
                primaryStyles.mb10,
                {fontFamily: appConfig.fonts.primaryFontBold},
              ]}>
              {language.All}
            </Text>
          </View>
        }
        data={products}
        height={windowHeight}
      />
    </View>
  );
};
