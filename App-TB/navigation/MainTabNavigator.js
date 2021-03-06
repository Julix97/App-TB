import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Ventas',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon          
          focused={focused}
          name={'dollar'}
          tipo={'font-awesome'}
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Almacen',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name={'dropbox'}
          tipo={'font-awesome'}
      />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Estadistica',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name={'line-chart'}
          tipo={'font-awesome'}
      />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
    SettingsStack,
});
