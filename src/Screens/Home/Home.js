import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View, FlatList, StatusBar } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';

import { useNavigation } from '@react-navigation/native';


export default function Home({route }) {
    const width = useWindowDimensions();
    const navigation = useNavigation()

    const data = route?.params
    console.log(data)

    const [isCarouselImage, setisCarouselImage] = useState([
        {
            uri: 'https://i.pinimg.com/736x/a6/fe/63/a6fe63a164987af4143a8ecc0a592955.jpg',
            key: 0
        },
        {
            uri: 'https://www.shutterstock.com/image-vector/hot-sale-price-offer-deal-600nw-1956790807.jpg',
            key: 1
        },
        {
            uri: 'https://img.freepik.com/premium-vector/discount-sale-promotion-event-horizontal-banner_554907-121.jpg',
            key: 2
        },
        {
            uri: 'https://www.shutterstock.com/image-vector/banner-announcing-mega-discount-half-260nw-1962489325.jpg',
            key: 3
        },

    ])

    const [isProductData, setisProductData] = useState
    ([
        {
            uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQArODHMQrqqvpfWJOv_TwcStKiWFOA75oE7jQ4tpC6H1x1tkS6ZInp0_XpwxghPbtOYx8fQFpL8PChSzisgVoRlxgbnvar-vGkS-RiH_sm7LSmb5aooUeV_d-tc9Sdq24p3J-6bjHb&usqp=CAc',
            title: 'Zara - Abstract Print Shirt - Navy Blue - L - Male', price: ' 3550', id:1-0
        },

        {
            uri: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsbLFGtLIDan23ogeShHhiaBf9Qk8SHM3KkgdywPc_lge1T4EKJYAWgnvF732ntFJsqHV7r-KmoqcplLq45NtSqRXXOJCHvNzyuOlX2XdW6HwSuZeHbWjjM2du3X0_qkqWdjdkqzOwQ1E&usqp=CAc',
            title: 'Leriya Fashion |Oversized Shirt for Women ', price: ' 1990', key: 1
        },

        {
            uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxQ7b4tvtCDEyi5Rolo1WYlQyl7wWQeq5oV89MChdYXbn2R8d7a8Z6ITYpmOyHuKGYcJvms72dyPR1MYEW09v8XtInEMxUhSWoi4EiuszO1aY_K5wmN3eZlIQm4kkGmy-AdXMu-4Tq&usqp=CAc',
            title: 'Zara - Short Oxford Shirt - Blue - Xs - Female ', price: ' 2550', key: 2
        },

        {
            uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIMdIX1wwxReVlZGcRAUNznazTy6cTMzpD8qMoTWvtBgJee8UkfH97kMH9SwMvWdETNIlS_UNRhufks7A-BnAMF-ZXGF1F14uyUw3wUqhSfeUGgAlzFWhHYRuvDbea5aHZu5-MGuNa&usqp=CAc',
            title: 'H&M - Regular Fit Muslin resort shirt', price: ' 1590', key: 3
        },

        {
            uri: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqtEIwWAZE_SMpiesqcCwN3NfQ9jr1bBcPaDcmRyLYbpkM1Z7Qd9LPFYurNeasSkg2iaJmV5CMfdzwwtXt6p29VLTZvBvagLVn6hJnvwA2zZooIRdRysC62sgmiR4ifKPDeCyeBpc&usqp=CAc',
            title: 'Corset Style Puff Sleeve Floral Top', price: ' 990', key: 4
        },

        {
            uri: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvwaMg4NdEcSQr4TWI9mLwGkwvzIa2skzsw_3cUMd7AqpnJzge0PW3E7WvF4QDUn6c2z-BGXPlEdKf_k2WVyqS8Kht4zXoVhpYIMbpHrfjUdRLXsAeJXTPbw&usqp=CAE',
            title: ' Eyebogler Men Self Design Casual', price: ' 590', key: 5
        },

    ]);

    const [categoryData, setisCategoryData] = useState([

        {
            uri: 'https://i.pinimg.com/236x/be/40/e1/be40e11edbe2d24d97d34d0210f6a5e0.jpg',
            title: 'Men', key: 1
        },

        {
            uri: 'https://i.pinimg.com/236x/7b/7e/8b/7b7e8b21030d7b3138f8c6b478698567.jpg',
            title: 'Women', key: 2
        },

        {
            uri: 'https://i.pinimg.com/236x/e8/e3/ad/e8e3ad627b14f380f045f48bde5df728.jpg',
            title: 'Sports Wear', key: 3
        },

        {
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXdw05l1LngsQO1SwfVDoev6hdTlSmK3eXR_uULOJpHoA3wKWZeMM1Q7dUISkc5APoTE&usqp=CAU',
            title: 'Coat', key: 4
        },

        {
            uri: 'https://i.pinimg.com/236x/59/4e/f9/594ef9e8648a49983c67d22778e8619a.jpg',
            title: 'Teens', key: 5
        },

        {
            uri: 'https://i.pinimg.com/736x/32/42/ce/3242cef294687a7f96f3f1890c43152a.jpg',
            title: 'Baby', key: 6
        },
    ])
 
    const [progress, setprogress] = useState(0)


    return (

        <View style={{ backgroundColor: '#fdf6f1', flex: 1 }}>
            <StatusBar backgroundColor={'#fdf6f1'} barStyle={'dark-content'} />




            <ScrollView>

                {/* ********************************** Header *************************************************** */}


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginBottom: 10, marginTop: 10 }}>
                    <TouchableOpacity
                        //   onPress={() => navigation.navigate('Drawer')}
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Image
                            style={{ width: 28, height: 28 }}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/13132/13132300.png' }}
                        />
                    </TouchableOpacity>
                   
                   
                </View>



                {/* ******************************* Discount poster Carousel ************************************************* */}



                <View>
                    <Carousel
                        width={width.width}
                        height={width.width / 2}
                        autoPlay={true}
                        autoPlayInterval={2000}
                        loop
                        data={isCarouselImage}
                        onProgressChange={(_, progressValue) => {
                            setprogress(progressValue)


                        }}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    source={{ uri: item.uri }}
                                    style={{
                                        width: width.width,
                                        height: width.width / 2,
                                    }}
                                />
                            </View>
                        )}
                    />


                    <View style={styles.dotContainer}>
                        {isCarouselImage.map((_, Key) => {
                            const isActive = Math.round(progress) === Key;
                            return (
                                <View
                                    key={Key}
                                    style={[
                                        styles.dotStyle,
                                        isActive && { backgroundColor: 'blue' }, 
                                    ]}
                                />
                            );
                        })}

                    </View>

                </View>


                {/* **************************** Category  List *********************************************** */}




                <View >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.categoryHeading}>Shop By Category</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SeeAll', { data: categoryData })}
                        >
                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>


                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categoryData}

                        renderItem={
                            ({ item }) => {
                                return (

                                    <View>

                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate('Category', { data: item.key })
                                                //    <RenderByCategory data={item.key} />

                                            }
                                        >
                                            <View >

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





                {/************************************** Curated List **************************************** */}



                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.categoryHeading}>Curated For You</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SeeAll', { item: isProductData })}

                        >

                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={isProductData}
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
                                            <Text style={{ fontSize: 12, padding: 5 }}>{item.title}</Text>
                                            <Text style={{ fontSize: 16, padding: 5 }}>₹ {item.price}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        }

                    />


                </View>


            </ScrollView>

        </View>
    )
}



const styles = StyleSheet.create({
    categoryHeading: {
        fontSize: 10,
        fontFamily: 'Poppins-Bold',
        margin: 20,
        marginBottom: 10
    },
    seeAll: {
        fontSize: 10,
        fontFamily: 'Inter_18pt-Light',
        margin: 20,
        marginBottom: 10,
        textShadowColor: 'white',
        textShadowRadius: 2
    },
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
        margin: 20,
        borderRadius: 10,
        elevation: 5,



    },
    productImage: {
        width: 150,
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'grey'
    },

    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dotStyle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'gray',
        marginHorizontal: 4,
    },
    menCategoryList: {
        width: 150,
        height: 250,
        backgroundColor: 'white',
        // margin: 20,
        marginTop: 10,
        borderRadius: 10,
        elevation: 5,
        // marginHorizontal:20


    },
    menCategoryProductImage: {
        width: 150,
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'black'
    }

})

