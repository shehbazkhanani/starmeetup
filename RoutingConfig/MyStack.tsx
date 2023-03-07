import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import 'react-native-gesture-handler';
import MyDrawer from './MyDrawer';
import SplashScreen from '../Screens/SplashScreen';
import Notification from '../Screens/Notification';
import Categories from '../Screens/Categories';
import CreatorsScreen from '../Screens/CreatorsScreen';
import ComediansScreen from '../Screens/ComediansScreen';
import MusicScreen from '../Screens/MusicScreen';
import ActorsScreen from '../Screens/ActorsScreen';
import MentorsScreen from '../Screens/MentorsScreen';
import AnchorsScreen from '../Screens/AnchorsScreen';
import SportsScreen from '../Screens/SportsScreen';
import TiktokScreen from '../Screens/TiktokScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={MyDrawer} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CreatorsScreen" component={CreatorsScreen} />
      <Stack.Screen name="ComediansScreen" component={ComediansScreen} />
      <Stack.Screen name="MusicScreen" component={MusicScreen} />
      <Stack.Screen name="ActorsScreen" component={ActorsScreen} />
      <Stack.Screen name="MentorsScreen" component={MentorsScreen} />
      <Stack.Screen name="AnchorsScreen" component={AnchorsScreen} />
      <Stack.Screen name="SportsScreen" component={SportsScreen} />
      <Stack.Screen name="TiktokScreen" component={TiktokScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack

const styles = StyleSheet.create({})