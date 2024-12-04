
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'



export default function Login({ navigation }) {

  const { height, width } = useWindowDimensions();

  return (
    <SafeAreaView style={{ backgroundColor: '#fdf6f1', flex: 1 }} >
      <StatusBar backgroundColor={'#fdf6f1'} barStyle={'dark-content'} />

      <View style={{ margin: 15 }}>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.slogan}>Become a member - don't miss out on deals, offers, discounts and bonus vouchers</Text>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/logo.png')}
          // source={{uri:'https://pngtree.com/freepng/online-shop-interface_14670436.html'}}
          style={[styles.image, { width: (width), height: width }]}
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <TouchableOpacity
          style={{
            width: (width - 80),
            height: 50,
            borderRadius: 30,
            backgroundColor: 'orange',
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={[styles.txt]}>Continue</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'left',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    // margin:15,

  },
  slogan: {
    fontSize: 11,
    fontFamily: 'Inter_18pt-ExtraLight'
  },


  txt: {
    fontSize: 16,
    fontFamily: 'Inter_18pt-Light',
    borderRadius: 25,
    textAlign: 'center'
  }
})