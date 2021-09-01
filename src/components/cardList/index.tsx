import React from 'react';
import {FlatList, View} from 'react-native';
import {primaryStyles} from '~/styles';
import {CardItem} from '../cardItem';

export const CardList = ({data}: {data: any}): JSX.Element => {
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
