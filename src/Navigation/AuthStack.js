import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../Screens';
import SignIn from '../Screens/Login/SignIn';


const Stack = createStackNavigator();

export default function AuthStack({ onLogin, onLogout }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Welcome'
        component={Login}
      />
      <Stack.Screen name="SignIn">
        {(props) => <SignIn {...props} onLogin={onLogin} />}

      </Stack.Screen>
     

    </Stack.Navigator>

  )
}

const styles = StyleSheet.create({})