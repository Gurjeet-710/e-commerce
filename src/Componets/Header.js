import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'

const Header = ({
     containerStyle={},
     centerTitle='',
     onPress=()=>{}
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
       style={
       {
        marginTop:30,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        ...containerStyle
       }
       }
    >
         <Image 
            source={imagePath?.ic_arrow}
         />
         <Text
            style={{
                fontWeight:'600',
                fontSize:18,
                color:'black'
            }}
         >{centerTitle}</Text>
         <View></View>
    </TouchableOpacity>
  )
}

export default Header

const styles = StyleSheet.create({})