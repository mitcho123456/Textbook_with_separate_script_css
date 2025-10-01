/**
 * App Navigation Structure
 * Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Colors} from '../utils/Colors';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ChapterListScreen from '../screens/ChapterListScreen';
import ChapterDetailScreen from '../screens/ChapterDetailScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack navigator for chapters
const ChapterStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.textWhite,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="ChapterList"
      component={ChapterListScreen}
      options={{title: 'Blood Test Chapters'}}
    />
    <Stack.Screen
      name="ChapterDetail"
      component={ChapterDetailScreen}
      options={({route}) => ({title: route.params?.title || 'Chapter'})}
    />
  </Stack.Navigator>
);

// Stack navigator for home
const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.textWhite,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{title: 'Blood Test Interpretation'}}
    />
  </Stack.Navigator>
);

// Stack navigator for settings
const SettingsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.textWhite,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{title: 'Settings'}}
    />
    <Stack.Screen
      name="About"
      component={AboutScreen}
      options={{title: 'About'}}
    />
  </Stack.Navigator>
);

// Main tab navigator
const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        switch (route.name) {
          case 'HomeTab':
            iconName = 'home';
            break;
          case 'ChaptersTab':
            iconName = 'book';
            break;
          case 'SearchTab':
            iconName = 'search';
            break;
          case 'SettingsTab':
            iconName = 'settings';
            break;
          default:
            iconName = 'help';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: Colors.textSecondary,
      tabBarStyle: {
        backgroundColor: Colors.cardBackground,
        borderTopColor: Colors.border,
      },
    })}>
    <Tab.Screen
      name="HomeTab"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
      }}
    />
    <Tab.Screen
      name="ChaptersTab"
      component={ChapterStack}
      options={{
        tabBarLabel: 'Chapters',
      }}
    />
    <Tab.Screen
      name="SearchTab"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Search',
      }}
    />
    <Tab.Screen
      name="SettingsTab"
      component={SettingsStack}
      options={{
        tabBarLabel: 'Settings',
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;