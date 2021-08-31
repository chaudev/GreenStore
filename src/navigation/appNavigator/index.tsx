import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {appRouter} from '~/navigation/appRouter';
import {RootTabNavigator} from '../rootTabNavigator';

const Stack = createNativeStackNavigator();

export const AppNavigator = (): any => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={appRouter.HOME} component={RootTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
