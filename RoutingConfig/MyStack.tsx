import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import 'react-native-gesture-handler';
import MyDrawer from './MyDrawer';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}
    >
      <Stack.Screen name="Home" component={MyDrawer} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack

const styles = StyleSheet.create({})