import React from 'react';
import {View, Text} from 'react-native';
import {GreenStyles, Icon, windowWidth} from 'green-native-ts';
import {appConfig} from '~/config';

export const TabItem = ({
  color,
  tab,
  text,
  iconName,
  iconType,
}: {
  color: string;
  tab: number;
  text: string;
  iconName: string;
  iconType: string;
}) => {
  const actived = color === appConfig.colors.primaryColor ? true : false;

  return (
    <View
      style={{
        width: windowWidth / tab,
        flex: 1,
      }}>
      <View
        style={[
          {
            flex: 1,
            backgroundColor: appConfig.colors.white,
            width: windowWidth / tab,
          },
          GreenStyles.Center,
        ]}>
        <View style={{flexDirection: 'row', marginRight: -5}}>
          <Icon
            type={iconType || 'Ionicons'}
            name={iconName}
            size={20}
            color={
              actived ? appConfig.colors.primaryColor : appConfig.colors.trans40
            }
          />
        </View>
        <Text
          style={{
            color: actived
              ? appConfig.colors.primaryColor
              : appConfig.colors.trans40,
            fontSize: 10,
            // fontWeight: actived ? 'bold' : '100',
            fontFamily: actived
              ? appConfig.fonts.primaryFontBold
              : appConfig.fonts.primaryFont,
            textTransform: 'uppercase',
          }}>
          {text}
        </Text>
      </View>
    </View>
  );
};
