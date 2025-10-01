/**
 * Blood Test Interpretation App - Main Component
 * Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
 */

import React, {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './navigation/AppNavigator';
import {Colors} from './utils/Colors';

const App = () => {
  useEffect(() => {
    // Hide splash screen after app loads
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primary}
          translucent={false}
        />
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;