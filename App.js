import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnBoardScreens,
  RegisterScreens,
  LoginScreens,
  PaymentScreens,
  DetailScreens,
  EditProfileScreens,
  NewScreens,
  ShoppingBagScreens,
  Component1,
  MessagesScreens,
  ChatScreens,
} from './src/screens';
import Tabs from './src/navigations/Tabs';
import BtnBack from './src/components/BtnBack';
import BtnRightEditProfile from './src/components/BtnRightEditProfile';
import BtnRightChat from './src/components/BtnRightChat';
import BtnBackArrow from './src/components/BtnBackArrow';
import BtnCart from './src/components/BtnCart';

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName={'Home'}>
        <Stack.Screen
          name="OnBoardScreens"
          component={OnBoardScreens}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreens"
          component={RegisterScreens}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreens"
          component={LoginScreens}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreens"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PaymentScreens"
          component={PaymentScreens}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailScreens"
          component={DetailScreens}
          options={{
            headerShown: true,
            title: null,
            headerLeft: () => {
              return <BtnBackArrow />;
            },
          }}
        />
        <Stack.Screen
          name="NewScreens"
          component={NewScreens}
          options={{
            headerShown: true,
            title: 'Face',
            headerLeft: () => {
              return <BtnBackArrow />;
            },
          }}
        />
        <Stack.Screen
          name="ShoppingBagScreens"
          component={ShoppingBagScreens}
          options={{
            title: 'Shopping Bag',
            headerLeft: () => {
              return <BtnBackArrow />;
            },
            headerRight: () => {
              return <BtnCart />;
            },
          }}
        />
        <Stack.Screen
          name="EditProfileScreens"
          component={EditProfileScreens}
          options={{
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              color: 'black',
            },
            title: ' Profile',
            headerShown: true,
            headerLeft: () => {
              return <BtnBack />;
            },
            headerRight: () => {
              return <BtnRightEditProfile />;
            },
          }}
        />
        <Stack.Screen
          name="Component1"
          component={Component1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="MessagesScreens" component={MessagesScreens} />
        <Stack.Screen
          name="ChatScreens"
          component={ChatScreens}
          options={({route}) => ({
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
            },
            title: route.params.userName,
            headerRight: () => {
              return <BtnRightChat />;
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
