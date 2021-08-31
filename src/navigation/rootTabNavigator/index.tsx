import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from '../tabNavigator';
import {appRouter} from '../appRouter';
import {DetailScreen} from '~/views/details';

const Stack = createNativeStackNavigator();

export const RootTabNavigator = (): any => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={appRouter.HOME}
        options={{headerShown: false}}
        component={TabNavigator}
      />
      <Stack.Screen
        name={appRouter.DETAIL}
        options={{headerShown: false}}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};
