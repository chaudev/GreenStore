import React from 'react';
import {View, Text} from 'react-native';
import {GreenStyles, Icon, windowWidth} from 'green-native-ts';
import {appConfig} from '~/config';
import {primaryStyles} from '~/styles';
import {useSelector} from 'react-redux';

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

  const card = useSelector(state => state.card.data);

  const getNumOfCard = (): number => {
    let temp = 0;
    for (let i = 0; i < card.length; i++) {
      temp = temp + parseInt(card[i]?.total);
    }
    return temp;
  };

  // Render
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
          {iconName === 'shopping-cart' && (
            <View
              style={[
                {
                  width: 15,
                  height: 15,
                  borderRadius: 900,
                  backgroundColor: '#4aae54',
                  marginLeft: -10,
                  marginRight: -5,
                },
                primaryStyles.center,
              ]}>
              <Text
                style={[
                  {fontSize: 8, fontFamily: appConfig.fonts.primaryFontBold},
                  primaryStyles.textWhite,
                ]}>
                {getNumOfCard()}
              </Text>
            </View>
          )}
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
