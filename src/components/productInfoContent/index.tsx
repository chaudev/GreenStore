import {GreenStyles, Icon} from 'green-native-ts';
import React from 'react';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {appConfig, language} from '~/config';
import {primaryStyles} from '~/styles';
import {Numberic} from '../numberic';

export const ProductInfoContent = ({
  number,
  setNumber,
  content,
}: {
  number: number;
  setNumber: any;
  content: string;
}): JSX.Element => {
  const [textSearch, setTextSearch] = useState('');

  const buttonSize: number = 45;

  return (
    <View
      style={[
        {
          width: '100%',
          borderRadius: 30,
        },
        primaryStyles.row,
      ]}>
      {/* <Numberic
        number={number}
        setNumber={param => {
          setNumber(param);
        }}
      /> */}

      <View style={[primaryStyles.full]}>
        <Text
          style={[
            primaryStyles.text16,
            {
              fontFamily: appConfig.fonts.primaryFont,
            },
          ]}>
          {content || ''}
        </Text>
      </View>
    </View>
  );
};
