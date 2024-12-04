import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

export default function CartCard({routes}) {

  const paramData = routes?.params 
  const {width} = useWindowDimensions();

  return (
    <View>
     <View style={[styles.container, { width: width - 35 }]}>

<Image
  style={styles.coverImage}
  source={{ uri: paramData.item.uri }}
/>
<View style={[styles.cardContent, { width: width - 35 }]}>


  <Text style={styles.cardContentText}>{paramData.item.title}</Text>
  <View>
    <Text style={styles.cardContentText}> {paramData.item.price} </Text>

    <View style={{ flexDirection: 'row', }}>
      <Text style={styles.cardContentText}> {paramData.size} </Text>

      <Image
        style={{ width: 20, height: 20, marginLeft: 150 }}
        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/17219/17219868.png' }}
      />
    </View>
  </View>
</View>
</View>
    </View>
  )
}

const styles = StyleSheet.create({})