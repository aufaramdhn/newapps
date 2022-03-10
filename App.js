import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnBoardScreens,
  RegisterScreens,
  LoginScreens,
  HomeScreens,
  PaymentScreens,
  DetailScreens,
  EditProfileScreens,
} from './src/screens';
import Tabs from './src/navigations/Tabs';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        intialRouteName={'Home'}>
        <Stack.Screen name="OnBoardScreens" component={OnBoardScreens} />
        <Stack.Screen name="RegisterScreens" component={RegisterScreens} />
        <Stack.Screen name="LoginScreens" component={LoginScreens} />
        <Stack.Screen name="HomeScreens" component={Tabs} />
        <Stack.Screen name="PaymentScreens" component={PaymentScreens} />
        <Stack.Screen name="DetailScreens" component={DetailScreens} />
        <Stack.Screen
          name="EditProfileScreens"
          component={EditProfileScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
