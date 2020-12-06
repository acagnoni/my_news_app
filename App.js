import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, CatalogScreen } from './src/screens'
import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

import { firebase } from './src/firebase/config'

const Stack = createStackNavigator();

export default function Login() {

  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Catalog" component={CatalogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}