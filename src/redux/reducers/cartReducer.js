import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  productsInCart: [],
  totalQuantity:0 ,
  totalAmount:0,

};


const cartSlice = createSlice({
  name: 'cart',  
  initialState, 
  reducers: {
   
    addProductInCart: (state, action) => {
     const newItem = action.payload;
     const existingItem = state.productsInCart.find(item => item.id === newItem.id && item.size === newItem.size);

     state.totalQuantity++;
     state.totalAmount += parseFloat(newItem.price);

     if(!existingItem){
      state.productsInCart.push({
        id:newItem.id,
        uri:newItem.uri,
        title: newItem.title,
        price: newItem.price,
        size: newItem.size,
        quantity:1,
        totalPrice:newItem.price,
      });
     }
     else{
      existingItem.quantity++;
      existingItem.totalPrice  += newItem.price;
     }
    
    },

    removeProductFromCart: (state, action) => {
      
     const product = action.payload;
     
     const existingItem =state.productsInCart.find(item => item.id === product.id && item.size === product.size);

     if(existingItem) {
     
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;

      if(existingItem.quantity === 1) {
        state.productsInCart = state.productsInCart.filter(item => !(item.id === product.id && item.size === product.size));
 
      }
      else{
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
       
      }
      }
     },

     ClearProduct: (state, action) => {
      const product =  action.payload;
      const existingItem = state.productsInCart.find(item=> item.id === product.id && item.size === product.size)
      
      if(existingItem){
        state.productsInCart = state.productsInCart.filter(item => !(item.id === product.id && item.size === product.size));
        state.totalQuantity -=existingItem.quantity
        state.totalAmount -= (existingItem.price*existingItem.quantity)
        
      }
     }, 
     LOAD_CART_FROM_STORAGE : (state, action) => {
      return action.payload || initialState
     }
  }})

export const { addProductInCart , removeProductFromCart, ClearProduct,LOAD_CART_FROM_STORAGE} = cartSlice.actions;

export default cartSlice.reducer;
