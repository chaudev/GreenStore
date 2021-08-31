import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '~/views/home';

const Stack = createNativeStackNavigator();

export const HomebNavigator = (): any => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomebNavigatorHome"
        options={{headerShown: false}}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
