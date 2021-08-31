import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tabs} from './Tabs';
import {tabRouer} from './tabRouter';
import {appConfig} from '~/config';
import {HomebNavigator} from '../homeNavigator';

const Tab = createBottomTabNavigator();

const tabs: number = 4;

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => (
          <Tabs color={color} route={route.name} tabs={tabs} />
        ),
        tabBarActiveTintColor: appConfig.colors.primaryColor,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name={tabRouer.HOMETAB} component={HomebNavigator} />
      <Tab.Screen name={tabRouer.CARDTAB} component={HomebNavigator} />
      <Tab.Screen name={tabRouer.WISHTAB} component={HomebNavigator} />
      <Tab.Screen name={tabRouer.SETTINGTAB} component={HomebNavigator} />
    </Tab.Navigator>
  );
};
