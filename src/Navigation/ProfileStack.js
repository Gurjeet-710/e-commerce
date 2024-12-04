import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Orders, Profile } from '../Screens'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator(); 

export default function ProfileStack({onLogout}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
           
            <Stack.Screen
                name='ProfileScreen'
                // component={Profile}
            >{(props) => <Profile {...props} onLogout={onLogout} />}</Stack.Screen>
           
            <Stack.Screen
                name='Orders'
                component={Orders}
            />
            {/* <Stack.Screen
                name='LogOut'
            > {(props) => <LogOut {...props} onLogout={onLogout} />}</Stack.Screen>
            */}

        </Stack.Navigator>

  )
}

const styles = StyleSheet.create({})