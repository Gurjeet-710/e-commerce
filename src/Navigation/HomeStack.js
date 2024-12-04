import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Home from '../Screens/Home/Home'
import SeeAll from '../Screens/Home/SeeAll'
import ProductDetail from '../Screens/Home/ProductDetail'
import RenderByCategory from '../Screens/Home/RenderByCategory'
import DrawerRoutes from './DrawerRoutes'

const Stack = createStackNavigator()

export default function HomeStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
            <Stack.Screen
                    name='Drawer'
                    component={DrawerRoutes}
                />
                <Stack.Screen
                    name='Home'
                    component={Home}
                />
                
            </Stack.Group>
            <Stack.Screen
                name='Category'
                component={RenderByCategory}
            />
            <Stack.Screen
                name='Detail'
                component={ProductDetail}
            />
            <Stack.Screen
                name='SeeAll'
                component={SeeAll}
            />




        </Stack.Navigator>

    )
}
