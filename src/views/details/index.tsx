import {windowWidth} from 'green-native-ts';
import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appConfig, language} from '~/config';
import {primaryStyles} from '~/styles';
import {Top} from '~/components/top';
import {useRoute, useNavigation} from '@react-navigation/native';
import {ProductInfo} from '~/components/productInfo';
import {useState} from 'react';
import {ProductInfoContent} from '~/components/productInfoContent';
import {ProductInfoButton} from '~/components/productInfoButton';
import {products} from '../home/data';
import {Header} from '~/components/header';
import {useDispatch, useSelector} from 'react-redux';
import {saveCardData, setDataCard} from '~/redux/reducers/cardSlice';
import {useEffect} from 'react';

export const DetailScreen = (): JSX.Element => {
  const insets = useSafeAreaInsets();

  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const card = useSelector(state => state.card.data);
  const [tempCardID, setTempCardID] = useState('');
  const [number, setNumber] = useState(1);

  useEffect(() => {
    mapIDCard();
  }, [card]);

  const addToCard = async () => {
    let temp: any = card;
    if (card === null) {
      dispatch(setDataCard([{item: route.params, total: 1}]));
      saveCardData([{item: route.params, total: 1}]);
    } else {
      let index: number = tempCardID.indexOf(route.params.id);
      if (index == -1) {
        dispatch(setDataCard(temp.concat({item: route.params, total: 1})));
        await saveCardData(
          setDataCard(temp.concat({item: route.params, total: 1})),
        );
      } else {
        let subTemp = [];
        for (let i = 0; i < temp.length; i++) {
          if (i == index) {
            subTemp.push({item: route.params, total: temp[index]?.total + 1});
          } else {
            subTemp.push(temp[i]);
          }
        }
        dispatch(setDataCard(subTemp));
        await saveCardData(setDataCard(subTemp));
      }
    }
  };

  const mapIDCard = () => {
    let tempID: any = [];
    card?.map((value, index) => tempID.push(value.item.id));
    setTempCardID(tempID);
  };

  const getNumOfCard = () => {
    let temp = 0;

    for (let i = 0; i < card.length; i++) {
      temp = temp + parseInt(card[i]?.total);
    }

    return temp;
  };

  // Render
  return (
    <View
      style={[
        {
          paddingTop: insets.top + 20,
        },
        primaryStyles.full,
      ]}>
      <StatusBar barStyle="dark-content" />

      <View style={[primaryStyles.ph15]}>
        <Header
          text=""
          fonstSize={16}
          showLeft={true}
          typeLeft="MaterialIcons"
          nameLeft="arrow-back"
          sizeLeft={26}
          showRight={true}
          typeRight="MaterialCommunityIcons"
          nameRight={true ? 'heart-outline' : 'heart'}
          sizeRight={26}
          onLeftPress={() => {
            navigation.goBack();
          }}
          onRightPress={() => {
            //
          }}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[primaryStyles.full]}>
        <View
          style={[
            primaryStyles.mv15,
            primaryStyles.ph15,
            primaryStyles.center,
          ]}>
          <Image
            resizeMode="cover"
            source={route.params.image}
            style={{width: windowWidth - 100, height: windowWidth - 100}}
          />
        </View>

        <View style={[primaryStyles.ph15, primaryStyles.center]}>
          <Text
            style={[
              primaryStyles.text20,
              primaryStyles.textBlack,
              {fontFamily: appConfig.fonts.primaryFontBold},
            ]}>
            {route.params.title}
          </Text>
        </View>

        <View
          style={[
            primaryStyles.mv15,
            primaryStyles.ph15,
            primaryStyles.center,
          ]}>
          <ProductInfo />
        </View>

        <View style={[primaryStyles.ph15, primaryStyles.mb10]}>
          <ProductInfoContent
            number={number}
            content={route.params.content}
            setNumber={(param: number) => {
              setNumber(param);
            }}
          />
        </View>

        <Text
          style={[
            primaryStyles.text18,
            primaryStyles.ph15,
            {fontFamily: appConfig.fonts.primaryFontBold},
          ]}>
          {language.Top}
        </Text>

        <View style={[primaryStyles.mv15, {}]}>
          <Top
            data={[products[0], products[2], products[7], products[5]]}
            height={200}
          />
        </View>
      </ScrollView>

      <View>
        <ProductInfoButton
          price={route.params.price}
          onPress={() => {
            addToCard();
          }}
        />
      </View>
    </View>
  );
};
