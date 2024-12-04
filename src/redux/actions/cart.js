import { addProductInCart, ClearProduct, LOAD_CART_FROM_STORAGE} from "../reducers/cartReducer";
import { removeProductFromCart } from "../reducers/cartReducer";

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch(addProductInCart(product));
    
  };
};


export const removeProduct = (product) => {
  return (dispatch) => {
    dispatch(removeProductFromCart(product));
    
  }; 
};

export const Delete = (product) => {
  return (dispatch) => {
    dispatch(ClearProduct(product));
    
  };
};

export const SavedCart = (product) => {
  return (dispatch) => {
    dispatch(LOAD_CART_FROM_STORAGE(product));
    
  };
};

