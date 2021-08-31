import {Icon} from 'green-native-ts';
import React from 'react';
import {useState} from 'react';
import {TextInput, View} from 'react-native';
import {appConfig, language} from '~/config';
import {primaryStyles} from '~/styles';

export const Search = (): JSX.Element => {
  const [textSearch, setTextSearch] = useState('');

  return (
    <View
      style={[
        {
          width: '100%',
          height: 45,
          backgroundColor: appConfig.colors.primaryColorSecond,
          borderRadius: 30,
        },
        primaryStyles.centerRow,
        primaryStyles.ph15,
      ]}>
      <Icon type="" name="search" color="#8d968d" size={20} />
      <TextInput
        value={textSearch}
        placeholder={language.Search}
        onChangeText={text => {
          setTextSearch(text);
        }}
        placeholderTextColor="#8d968d"
        style={[
          primaryStyles.full,
          primaryStyles.pv0,
          primaryStyles.textBlack,
          primaryStyles.ph10,
          primaryStyles.text16,
        ]}
      />
    </View>
  );
};
