import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Screens/Home/Home';



const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>

    <Drawer.Screen
      name='Home'
      component={Home}
    />

  </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})