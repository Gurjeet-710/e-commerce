import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CartScreen from '../Screens/Orders/CartScreen'



const Stack = createStackNavigator()

export default function CartStack() {

   

    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name='CartScreen'
                component={CartScreen}
            />
        </Stack.Navigator>


    )
}

const styles = StyleSheet.create({})