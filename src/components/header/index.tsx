import {Icon} from 'green-native-ts';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {primaryStyles} from '~/styles';

export const Header = ({
  text,
  fonstSize,
  fontFamily,
  onLeftPress,
  onRightPress,
  showLeft,
  showRight,
  typeLeft,
  nameLeft,
  typeRight,
  nameRight,
  sizeLeft,
  sizeRight,
}: {
  text: any;
  fonstSize: number;
  fontFamily: string;
  onLeftPress: any;
  onRightPress: any;
  showRight: boolean;
  showLeft: boolean;
  typeLeft: string;
  nameLeft: string;
  sizeLeft: number;
  typeRight: string;
  nameRight: string;
  sizeRight: number;
}): JSX.Element => {
  // Render
  return (
    <View
      style={[
        {
          width: '100%',
        },
        primaryStyles.spaceBetweenRow,
      ]}>
      {showLeft && (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            showLeft ? onLeftPress() : console.log('x');
          }}
          style={[primaryStyles.full]}>
          <Icon
            type={typeLeft}
            name={nameLeft}
            color="#101010"
            size={sizeLeft}
          />
        </TouchableOpacity>
      )}

      <Text
        style={{
          color: '#101010',
          fontSize: fonstSize || 16,
          textTransform: 'uppercase',
          fontFamily: fontFamily,
        }}>
        {text}
      </Text>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          showRight ? onRightPress() : console.log('x');
        }}
        style={[primaryStyles.full]}>
        {showRight && (
          <Icon
            type={typeRight}
            name={nameRight}
            color="#101010"
            size={sizeRight}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};
