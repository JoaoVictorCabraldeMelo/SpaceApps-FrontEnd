import React from 'react';
import Home from '../screens/Home/home';
import Satellites from '../screens/Satellites/satellites';
import User from '../screens/User/User';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="home" size={25} color={focused ? '#000' : '#d4cbcb'} />
        ),
      }),
    },
    Satellites: {
      screen: Satellites,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="gamepad" size={25} color={focused ? '#000' : '#d4cbcb'} />
        ),
      }),
    },
    User: {
      screen: User,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="user" size={25} color={focused ? '#000' : '#d4cbcb'} />
        ),
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: '#7159c1',
    },
    tabBarOptions: {
      showLabel: false,
    },
  },
);

export default createAppContainer(TabNavigator);
