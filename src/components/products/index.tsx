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

const ProductsItem = ({
  item,
  height,
  data,
}: {
  item: any;
  height: number;
  data: any;
}): JSX.Element => {
  const navigation = useNavigation();
  const imageSize = (windowWidth - 45) / 2 - 30;

  let ANIM_PRESS: any = new Animated.Value(1);

  const isFinal = (i: any, d: any): boolean => {
    let index = d.indexOf(i);
    return index + 1 === d.length ? true : false;
  };

  // Render
  return (
    <Animated.View
      style={[
        {
          width: (windowWidth - 45) / 2,
          height: height,
          transform: [{scale: ANIM_PRESS}],
          borderRadius: 20,
          marginLeft: 15,
          marginRight: isFinal(item, data) ? 15 : 0,
          backgroundColor: appConfig.colors.primaryColorSecond,
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
            navigation.navigate(appRouter.DETAIL, item);
          });
        }}
        style={[
          {
            width: '100%',
            height: '100%',
          },
          primaryStyles.center,
          primaryStyles.ph15,
        ]}>
        {item?.image !== undefined && item?.image !== null && (
          <Image
            resizeMode="contain"
            source={item?.image}
            style={{width: imageSize, height: imageSize}}
          />
        )}

        <Text
          style={[
            primaryStyles.textBlack,
            primaryStyles.text14,
            primaryStyles.mt5,
            primaryStyles.textBold,
            primaryStyles.mt10,
            {
              width: '100%',
            },
          ]}>
          {item?.title || ''}
        </Text>

        <Text
          style={[
            primaryStyles.mt5,
            primaryStyles.textBold,
            primaryStyles.text16,
            {
              color: appConfig.colors.primaryColor,
              width: '100%',
            },
          ]}>
          {parseMoney(item?.price || 0)}đ
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const Products = ({
  data,
  height,
  ListHeaderComponent,
}: {
  data: any;
  height: number;
  ListHeaderComponent: any;
}): JSX.Element => {
  // Render
  return (
    <View
      style={[
        {
          width: '100%',
          height: height,
        },
      ]}>
      <FlatList
        horizontal={false}
        numColumns={2}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={key => {
          return key.id;
        }}
        renderItem={({item}: {item: any}) => (
          <ProductsItem item={item} height={235} data={data} />
        )}
        style={{flex: 1}}
        ListFooterComponent={<View style={{height: windowHeight / 4}} />}
      />
    </View>
  );
};
