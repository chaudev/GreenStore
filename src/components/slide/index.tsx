import React, {useRef} from 'react';
import {useEffect} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  Image,
} from 'react-native';
import {primaryStyles} from '~/styles';

let slide = 1;
let trend = false;

export const Slide = ({
  height,
  width,
  data,
}: {
  height: number;
  width: number;
  data: any;
}): JSX.Element => {
  let scrollRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();

  useEffect(() => {
    scrollToItem();
  }, []);

  const ANIM_SCROLL = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: scrollX,
          },
        },
      },
    ],
    {
      useNativeDriver: false,
    },
  );

  const scrollToItem = async () => {
    await wait(5000);

    scrollRef.current.scrollTo({
      x: (windowWidth - 30) * slide,
      animated: true,
    });

    trend === false ? slide++ : slide--;

    if (slide === data.length || slide === -1) {
      slide = 1;
      trend = !trend;
    }

    scrollToItem();
  };

  const wait = (timeout: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  // console.log('data: ', data);

  // Render
  return (
    <View style={[styles.container, primaryStyles.center]}>
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        pagingEnabled
        style={{width: '100%'}}
        contentContainerStyle={{padding: 0, margin: 0}}
        showsHorizontalScrollIndicator={false}
        onScroll={ANIM_SCROLL}
        scrollEventThrottle={1}>
        {data.map((item, index) => {
          return (
            <View
              // source={{uri: item?.image}}
              key={index}
              style={[
                styles.card,
                primaryStyles.centerRow,
                primaryStyles.ph15,
                {height: height, width: width},
              ]}>
              <View style={{flex: 1}}>
                <Text
                  style={[
                    primaryStyles.textWhite,
                    primaryStyles.text18,
                    primaryStyles.textBold,
                    primaryStyles.mv5,
                  ]}>
                  {item?.title || ''}
                </Text>
                <Text style={[primaryStyles.textWhite, primaryStyles.text14]}>
                  {item?.content || ''}
                </Text>
              </View>
              <Image
                resizeMode="contain"
                source={item?.image}
                style={{height: 100, width: 100}}
              />
            </View>
          );
        })}
      </ScrollView>

      <View
        style={[
          styles.indicatorContainer,
          primaryStyles.centerRow,
          primaryStyles.center,
        ]}>
        {data.map((image, index) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (index - 1),
              windowWidth * index,
              windowWidth * (index + 1),
            ],
            outputRange: [6, 12, 6],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View key={index} style={[styles.normalDot, {width}]} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#4aae54',
    borderRadius: 20,
  },
  normalDot: {
    height: 6,
    width: 6,
    borderRadius: 4,
    backgroundColor: '#CFD8DC',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    height: 20,
    marginTop: -25,
    paddingBottom: 5,
  },
});
