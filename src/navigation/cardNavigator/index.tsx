import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CardScreen} from '~/views/card';

const Stack = createNativeStackNavigator();

export const CardNavigator = (): any => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CardNavigator"
        options={{headerShown: false}}
        component={CardScreen}
      />
    </Stack.Navigator>
  );
};
