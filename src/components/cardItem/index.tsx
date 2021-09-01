import {parseMoney} from 'green-native-ts';
import React from 'react';
import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
import {
  animationPress,
  animationPressIn,
  animationPressOut,
} from '~/animation/buttonZoom';
import {appConfig} from '~/config';
import {primaryStyles} from '~/styles';
import {useNavigation} from '@react-navigation/native';
import {appRouter} from '~/navigation/appRouter';
import {Numberic} from '../numberic';
import {useDispatch, useSelector} from 'react-redux';
import {saveCardData, setDataCard} from '~/redux/reducers/cardSlice';
import {useEffect} from 'react';
import {useState} from 'react';

export const CardItem = ({item, data}: {item: any; data: any}): JSX.Element => {
  const navigation: any = useNavigation();
  const dispatch: any = useDispatch();
  const imageSize: number = 90;
  let ANIM_PRESS: any = new Animated.Value(1);

  const card: any = useSelector(state => state.card.data);

  const [tempCardID, setTempCardID] = useState('');

  useEffect(() => {
    setDataCard(card);
    mapIDCard();
  }, [card]);

  // map card id
  const mapIDCard = (): void => {
    let tempID: any = [];
    card?.map((value, index) => tempID.push(value.item.id));
    setTempCardID(tempID);
  };

  // add to card
  const addToCard = async (value: any): Promise<void> => {
    if (card !== null) {
      let index = tempCardID.indexOf(value.id);
      if (index != -1) {
        let subTemp = [];
        for (let i = 0; i < card.length; i++) {
          if (i == index) {
            subTemp.push({item: value, total: card[index]?.total + 1});
          } else {
            subTemp.push(card[i]);
          }
        }
        dispatch(setDataCard(subTemp));
        await saveCardData(setDataCard(subTemp));
      }
    }
  };

  // remove from card
  const removeFromCard = async (value: any): Promise<void> => {
    if (card !== null) {
      let index = tempCardID.indexOf(value.id);
      if (index != -1) {
        let subTemp = [];
        if (card[index]?.total > 1) {
          for (let i = 0; i < card.length; i++) {
            if (i == index) {
              subTemp.push({item: value, total: card[index]?.total - 1});
            } else {
              subTemp.push(card[i]);
            }
          }
        } else {
          for (let i = 0; i < card.length; i++) {
            if (i != index) {
              subTemp.push(card[i]);
            }
          }
        }
        dispatch(setDataCard(subTemp));
        await saveCardData(setDataCard(subTemp));
      }
    }
  };

  const isFinal = (i: any, d: any): boolean => {
    let index = d.indexOf(i);
    return index + 1 === d.length ? true : false;
  };

  // Render
  return (
    <Animated.View
      style={[
        {
          width: '100%',
          transform: [{scale: ANIM_PRESS}],
          borderRadius: 12,
          marginRight: isFinal(item, data) ? 15 : 0,
          backgroundColor: appConfig.colors.primaryColorSecond,
        },
        primaryStyles.mb10,
        primaryStyles.ph15,
        primaryStyles.pv05,
        primaryStyles.centerRow,
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
            navigation.navigate(appRouter.DETAIL, item?.item);
          });
        }}
        style={[primaryStyles.centerRow, primaryStyles.full]}>
        {item?.item?.image !== undefined && item?.item?.image !== null && (
          <Image
            resizeMode="contain"
            source={item?.item?.image}
            style={{width: imageSize, height: imageSize}}
          />
        )}

        <View style={[primaryStyles.ph10, primaryStyles.full]}>
          <Text
            style={[
              primaryStyles.textBlack,
              primaryStyles.text14,
              primaryStyles.mt5,
              primaryStyles.textBold,
              primaryStyles.mt10,
            ]}>
            {item?.item?.title || ''}
          </Text>

          <Text
            style={[
              primaryStyles.mt5,
              primaryStyles.textBold,
              primaryStyles.text18,
              {
                color: appConfig.colors.primaryColor,
              },
            ]}>
            {parseMoney(item?.item?.price || 0)}đ
          </Text>
        </View>
      </TouchableOpacity>
      <View style={[]}>
        <Numberic
          scale={1.8}
          number={item?.total}
          setNumber={param => {
            if (param > item?.total) {
              addToCard(item?.item);
            } else {
              removeFromCard(item?.item);
            }
          }}
        />
      </View>
    </Animated.View>
  );
};
