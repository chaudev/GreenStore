import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CardScreen} from '~/views/card';
import {appRouter} from '../appRouter';
import {DeliveryScreen} from '~/views/delivery';

const Stack = createNativeStackNavigator();

export const CardNavigator = (): any => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CardNavigator"
        options={{headerShown: false}}
        component={CardScreen}
      />
      <Stack.Screen
        name={appRouter.DELIVERY}
        options={{headerShown: false}}
        component={DeliveryScreen}
      />
    </Stack.Navigator>
  );
};
