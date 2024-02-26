import React from 'react';
 import { Text, View } from 'react-native';
import Button from './src/components/buttons/Button';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './src/screens/LandingScreen';
import Splash from './src/screens/Splash';
import SignUp from './src/screens/SignUp';
import { StatusBar } from 'expo-status-bar';
import  SignIn  from './src/screens/SignIn';
import { Provider } from 'react-redux'
import { store } from './src/store.js'
import Otp from './src/screens/Otp.js';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
  <NavigationContainer>
      <StatusBar style="auto" />
     <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={LandingScreen} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
    
  )
}
