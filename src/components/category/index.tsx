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

const CategoryItem = ({
  item,
  height,
  data,
}: {
  item: {id: any; title: any; image: any};
  height: number;
  data: any;
}): JSX.Element => {
  const imageSize = height - 50;

  let ANIM_PRESS: any = new Animated.Value(1);

  const isFinal = (i: any, d: any): boolean => {
    let index = d.indexOf(i);
    return index + 1 === d.length ? true : false;
  };

  // Render
  return (
    <Animated.View
      style={{
        width: height - 10,
        height: height,
        transform: [{scale: ANIM_PRESS}],
        borderRadius: 20,
        marginLeft: 15,
        marginRight: isFinal(item, data) ? 15 : 0,
        backgroundColor: appConfig.colors.primaryColorSecond,
      }}>
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
            console.log('x');
          });
        }}
        style={[
          {
            width: height - 10,
            height: height,
          },
          primaryStyles.center,
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
          ]}>
          {item?.title || ''}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const Category = ({
  data,
  height,
}: {
  data: any;
  height: number;
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
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={key => {
          return key.id;
        }}
        renderItem={({item}: {item: any}) => (
          <CategoryItem item={item} height={height} data={data} />
        )}
      />
    </View>
  );
};
