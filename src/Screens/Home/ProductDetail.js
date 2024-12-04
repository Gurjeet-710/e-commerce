import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addProductInCart, removeProductFromCart } from '../../redux/reducers/cartReducer';

const sizes = ['S', 'M', 'L', 'XL'];

export default function ProductDetail({ navigation, route }) {

    const item = route?.params

    const dispatch = useDispatch();

    const handleAddToCart = async (item) => {

        if (!isselectedSize) {
            Alert.alert('Please select a size before adding to cart.');
            return;
        }

        const productWithSize = {
            ...item,
            size: isselectedSize,
        };
        try{
            await AsyncStorage.setItem(`product_size_${item.id}`, isselectedSize);
            dispatch(addProductInCart(productWithSize));
        }
        catch(error){
            console.error('Error saving size:', error);
        }
    };

    const handleRemoveItem = async (item) => {
        const productWithSize = {
            ...item,
            size: isselectedSize,
        };
        try{
            await AsyncStorage.removeItem(`product_size_${item.id}`);
        dispatch(removeProductFromCart(productWithSize))
        }
        catch(error){
            console.error('Error removing size:', error);
        }
    };

    useEffect(() => {
        const loadSelectedSize = async () => {
            try {
                const savedSize = await AsyncStorage.getItem(`product_size_${item.id}`);
                if (savedSize) {
                    setisSelectedSize(savedSize);
                }
            } catch (error) {
                console.error('Error loading size:', error);
            }
        };
    
        loadSelectedSize();
    }, [item.id]);
    
    


    const [isselectedSize, setisSelectedSize] = useState(null);

    const { width } = useWindowDimensions()


    const product = useSelector(
        state => state.cart.productsInCart.find(product => product.id === item.id && product.size === isselectedSize));


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
                <Text style={{ marginLeft: 20, textAlign: 'center' }}>Product Details</Text>
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>




                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20, marginTop: 0 }}>
                    <Image
                        style={[styles.productImage, { width: width }]}
                        source={{ uri: item.uri }}
                    />
                </View>

                <View style={{ marginTop: 0, margin: 20 }}>
                    <Text style={styles.Title}>{item.title}</Text>



                    <Text style={styles.Price}>₹ {item.price}</Text>

                </View>




                <Text style={styles.sizeText}>Size</Text>
                <View style={styles.sizeContainer}>
                    {
                        sizes.map((size) => {
                            return (
                                <TouchableOpacity
                                key={size}
                                    style={styles.sizeValueContainer}
                                    onPress={() => {

                                        setisSelectedSize(size);
                                    }}
                                >
                                    <Text style={[styles.sizeValue,
                                    isselectedSize == size && { color: '#e55b5b' }
                                    ]}>{size}</Text>
                                </TouchableOpacity>

                            )
                        })
                    }
                </View>





                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    { !product >= 1 ? (<View>
                       
                       </View>):(
                    <TouchableOpacity
                        style={styles.Add_Remove_Container}
                        onPress={() => handleRemoveItem(item)}
                    >
                        <Image
                            style={styles.Add_Remove_Button}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4096/4096251.png' }}
                        />
                    </TouchableOpacity>
                     )
} 
{   !product >= 1 ?
                   (<TouchableOpacity
                        style={styles.addtoCartButton}
                        onPress={() => handleAddToCart(item)}
                    >
                        <Text style={styles.buttonText}>{product ? product.quantity:'Add To Cart'}</Text>
                    </TouchableOpacity>):
                   ( <View style={styles.addtoCartButton}>
                   <Text style={styles.buttonText}>{product.quantity}</Text>
                   </View>
                   )
}
                    { !product >=1 ? (<View></View>):(
                    <TouchableOpacity
                        style={styles.Add_Remove_Container}
                        onPress={() => handleAddToCart(item)}
                    >
                        <Image
                            style={styles.Add_Remove_Button}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1237/1237946.png' }}
                        />
                    </TouchableOpacity>
)}
                </View>


            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    productImage: {
        height: 380,

        // elevation: 5,
        // borderRadius: 10
    },
    Title: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',


    },
    Price: {
        // textAlign:'right',
        fontSize: 18,
        padding: 10,
        paddingLeft: 0,
        fontWeight: '700',
        color: 'blue'

    },
    sizeText: {
        fontSize: 18,
        margin: 20,
        marginTop: 0,
        fontWeight: '500'

    },
    sizeContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 125,
        right: 0,
        marginHorizontal: 10
    },
    sizeValue: {
        justifyContent: 'center',
        textAlign: 'center',

    },
    sizeValueContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 10,
        elevation: 5,

    },
    addtoCartButton: {
        margin: 30,
        borderWidth: 1,
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',

    },

    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Inter_18pt-Light'
    },
    Add_Remove_Button: {
        // backgroundColor:'red',
        width: 30,
        height: 30,


    },
    Add_Remove_Container: {
        width: 40,
        height: 40,
        // borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    Add_Remove_Text: {
        backgroundColor: '#e55b5b',
        color: 'white',
        elevation: 5
    }
})