import { StatusBar, StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'


const Orders = ( {navigation}) => {
  return (
    <View style={{ backgroundColor: '#fdf6f1', flex: 1 }}>
      <StatusBar backgroundColor={'#fdf6f1'} barStyle={'dark-content'} />

      <View style={{ flexDirection: 'row', margin: 20, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3114/3114883.png' }}
                    />
                </TouchableOpacity>
                <Text style={{ marginLeft: 20, textAlign: 'center' }}>Orders</Text>
            </View>


      
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})