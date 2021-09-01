import {windowHeight} from 'green-native-ts';
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
import {CardItem} from '../cardItem';
import {Header} from '../header';

export const CardList = ({data}: {data: any}): JSX.Element => {
  console.log(data);

  // Render
  return (
    <View
      style={[
        {
          width: '100%',
        },
        primaryStyles.full,
      ]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={key => {
          return key.id;
        }}
        renderItem={({item}: {item: any}) => (
          <CardItem item={item} data={data} />
        )}
        style={{flex: 1}}
      />
    </View>
  );
};
