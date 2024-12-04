import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addProductInCart, ClearProduct, removeProductFromCart } from '../../redux/reducers/cartReducer';
import { ScrollView } from 'react-native-gesture-handler';


export default function CartScreen({ navigation }) {
  const width = useWindowDimensions();

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeProductFromCart(item))
    console.log(item)
  }

  const handleAddToCart = (item) => {
    dispatch(addProductInCart(item));
    console.log(addProductInCart(item))
  }

  const handleDeleteItem = (item) => {
    dispatch(ClearProduct(item))
  }

  // const product = useSelector(
  //   state => state.cart.productsInCart.find(product => product.id === item.id && product.size === isselectedSize));


  return (
    <View style={{ backgroundColor: '#fdf6f1', flex: 1 }}>
      <StatusBar backgroundColor={'#fdf6f1'} barStyle={'dark-content'} />

      <View style={{ flexDirection: 'row', margin: 20, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{ width: 25, height: 25 }}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3114/3114883.png' }}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 20, textAlign: 'center', fontSize: 18 }}>Cart</Text>
      </View>


      {cart.productsInCart.length === 0 ? (


        <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
          <Image
            style={{ width: width.width - 20, height: 300, margin: 30, }}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/11329/11329060.png' }}
          />
          <Text style={{ fontSize: 18, textAlign: 'center', fontFamily: 'Inter_18pt-SemiBold' }}>Empty</Text>
          <Text style={{ fontSize: 14, textAlign: 'center', fontFamily: 'Inter_18pt-Regular' }}>
            There is no item
          </Text>
          {console.log(cart.productsInCart)}
        </View>


      ) : (
        <>
      <ScrollView>

          <FlatList
            data={cart.productsInCart}
            keyExtractor={(item, index) => `${item.id}-${item.size}-${index}`}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Image
                  style={styles.coverImage}
                  source={{ uri: item.uri }}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardContentText}>{item.title}</Text>

                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.cardContentText}>₹ {item.price}</Text>
                    <Text style={[styles.cardContentText, { marginLeft: 20 }]}>{item.size}</Text>
                  </View>
                  {/* <Text style={styles.cardContentText}>Quantity: {item.quantity}</Text> */}
                  {/* {console.log('qucart.items.quantity)} */}
                  <View style={{ flexDirection: 'row',marginTop:5 }}>
                    <TouchableOpacity
                            style={styles.Add_Remove_Container}
                            onPress={() => handleRemoveItem(item)}
                        >
                            <Image
                                style={styles.Add_Remove_Button}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4096/4096251.png' }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.Add_Remove_Text}>   {cart.productsInCart ? item.quantity : 0}   </Text>
                       
                        <TouchableOpacity
                            style={styles.Add_Remove_Container}
                            onPress={() => handleAddToCart(item)}
                        >
                            <Image
                                style={styles.Add_Remove_Button}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1237/1237946.png' }}
                            />
                        </TouchableOpacity>

                    </View>
                 
                </View>


                <TouchableOpacity
                  onPress={() => handleDeleteItem(item)}
                >
                  <Image
                    style={{ width: 20, height: 20, position: 'absolute', bottom: 5, right: 5,elevation:3 }}
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10995/10995755.png' }}
                  />
                </TouchableOpacity>
               
                 
              </View>
            )}
          />
    
   
          
          <View style={{ margin: 20 }}>
            <Text style={{ marginBottom: 10 }}>Price Details</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.PricedetailText}>Price({cart.totalQuantity} items)</Text>/
              <Text style={styles.PricedetailText}>₹ {cart.totalAmount}</Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.PricedetailText}>Delivery charges</Text>/
              <Text style={styles.PricedetailText}>Free Delivery</Text>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderStyle: 'dashed' }}>
              <Text style={[styles.PricedetailText, { fontWeight: '700' }]}>Total Amount</Text>/
              <Text style={[styles.PricedetailText, { fontWeight: '700' }]}>₹ {cart.totalAmount}</Text>
            </View>

            <View style={{ 
              justifyContent:'center', alignItems:'center'
              // flexDirection: 'row',
              //  justifyContent: 'space-between'
                }}>
              {/* <TouchableOpacity
                style={styles.button}
                onPress={()=> navigation.navigate('Category')}
              >
                <Text style={styles.buttonText}>See More</Text>
              </TouchableOpacity> */}

              <TouchableOpacity
              style={styles.button}
              >
                <Text style={styles.buttonText}>Place Order</Text>
              </TouchableOpacity>

            </View>

     
         
          </View>
          </ScrollView>
        </>
      )}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#fff',
  },
  coverImage: {
    width: 60,
    height: 80,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  cardContentText: {
    fontSize: 12,
    marginBottom: 5,
  },
  PricedetailText: {
    fontSize: 10,
    marginBottom: 5,

  },
  button: {
    marginTop:20,
    borderWidth: 1,

    width: 150,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'orange'
  },
  buttonText:{
    textAlign:'center',
     fontSize: 14,
        fontFamily: 'Inter_18pt-Light'

  },
  Add_Remove_Button: {
    // backgroundColor:'red',
    width: 18,
    height: 18,


},
Add_Remove_Container: {
    width: 20,
    height: 20,
    // borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2
},
Add_Remove_Text: {
    backgroundColor: '#e55b5b',
    color: 'white',
    elevation: 2
}

});
