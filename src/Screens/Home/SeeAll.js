import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'



export default function SeeAll({ navigation, route }) {
    const paramData = route?.params.data
    const Product = route?.params.item
    console.log(paramData)
    return (
        <View style={{ backgroundColor: '#fdf6f1', flex: 1 }}>

            
                <StatusBar backgroundColor={'#fdf6f1'} barStyle={'dark-content'} />

                <View style={{ flexDirection: 'row', margin: 20, alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3114/3114883.png' }}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 20, textAlign: 'center' }}>See All</Text>
                </View>
      

                <View>
                    <FlatList
                        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20 }}
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={paramData}

                        renderItem={
                            ({ item }) => {
                                return (

                                    <View>

                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Category', { data: item.key })}

                                        >
                                            <View >
                                                {/* {console.log(item.key)} */}
                                                <Image source={{ uri: item?.uri }} style={
                                                    styles.categoryItem
                                                } />
                                                <Text style={styles.categoryTitle}>{item.title}</Text>

                                            </View>
                                        </TouchableOpacity>



                                    </View>

                                )
                            }
                        }

                    />
                </View>
     

            {/* ******************************************************************************************************88 */}
          


            <View style={{ marginBottom: 35, paddingBottom: 10 }} >
                
                <FlatList
                    // horizontal={true}
                    style={{}}
                    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20, margin: 20, marginTop: 0 }}
                    showsVerticalScrollIndicator={false}
                    data={Product}
                    renderItem={
                        ({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Detail', {
                                        uri: item.uri,
                                        title: item.title,
                                        price: item.price
                                    })}
                                >
                                    <View style={styles.curatedItem

                                    }>
                                        <Image source={{ uri: item?.uri }} style={
                                            styles.productImage
                                        } />
                                        <Text style={{ padding: 5 }}>{item.title}</Text>
                                        <Text style={{ fontSize: 18, padding: 5 }}>{item.price}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    }

                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    categoryItem: {
        width: 70,
        height: 70,
        backgroundColor: "white",
        borderRadius: 50,
        marginLeft: 20,
        margin: 10,
        marginTop: 10,
        elevation: 5,



    },
    categoryTitle: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 10,
        // elevation:
        textShadowColor: 'white',
        textShadowRadius: 5,
        paddingLeft: 5

    },
    curatedItem: {
        width: 150,
        height: 260,
        backgroundColor: 'white',
        // margin: 20,
        borderRadius: 10,
        elevation: 5,
        //  marginBottom:10





    },
    productImage: {
        width: 150,
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'grey'
    },
})