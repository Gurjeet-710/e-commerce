import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Profile } from '../Screens';
import { Image, StyleSheet } from 'react-native';
import Home from '../Screens/Home/Home';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import CartStack from './CartStack';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ZoomOutRight } from 'react-native-reanimated';


const Tab = createBottomTabNavigator();

export default function TabRoutes({ onLogout }) {

  
  const cart = useSelector(state => state.cart);

  const [cartItem , setCartItem] = useState(0)
  useEffect(()=>{
      setCartItem(cart.totalQuantity)
      // console.warn('cartItem: '+cartItem)
  },[cart])

  return (

    <Tab.Navigator screenOptions={style.option} tabBarHideOnKeyboard={true} tabBarItemStyle={style.icon}>
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (focused ?
            <Image
              style={{ width: 20, height: 20, tintColor: 'blue' }}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1946/1946436.png' }} />
            :
            <Image style={{ width: 20, height: 20 }}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1946/1946488.png' }} />


          ),
          // tabBarActiveBackgroundColor:'white',
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',

        }}
      />

      <Tab.Screen
        name='cart'
        component={CartStack}
        
        options={{
          tabBarBadge:cartItem > 0 ? cartItem : null,
          tabBarBadgeStyle:{width:18,height:18,fontSize:11},
          tabBarIcon: ({ focused }) => (focused ?
            <Image
              style={{ width: 20, height: 20, tintColor: 'blue' }}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3514/3514491.png' }} 
              
              />
            :
            <Image style={{ width: 20, height: 20 }}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3144/3144456.png' }} />
          ),

          tabBarActiveBackgroundColor: 'white',
          tabBarActiveTintColor: 'blue',
          // tabBarInactiveTintColor:'grey',
        }}
      />

      <Tab.Screen
        name='Profile'
        // component={ProfileStack}
        options={{

          tabBarIcon: ({ focused }) => (focused ?
            <Image
              style={{ width: 20, height: 20, tintColor: 'blue' }}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077114.png' }} />
            :
            <Image style={{ width: 20, height: 20 }}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077063.png' }} />
          ),

          tabBarActiveBackgroundColor: 'white',
          tabBarActiveTintColor: 'blue',
          // tabBarInactiveTintColor:'grey',
        }}
      >{(props) => <ProfileStack {...props} onLogout={onLogout} />}
      </Tab.Screen>



    </Tab.Navigator>

  );
}
const style = StyleSheet.create({
  option: {
    headerShown: false,

  },
  icon: {
    tintColor: 'grey'
  }
})
