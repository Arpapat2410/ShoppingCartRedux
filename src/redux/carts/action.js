import { ADD_TO_CART , REMOVE_FROM_CART , INCRESE_QUANTITY , DECREASE_QUANTITY } from "./actionTypes";

export const addToCart= (product) =>{
    return{
        type:ADD_TO_CART,
        payload:product,
    };
};

export const removeFromcart= (productId) =>{
    return{
        type:REMOVE_FROM_CART,
        payload:productId,
    };
};

export const increaseQunatity = (productId) =>{
    return{
        type:INCRESE_QUANTITY,
        payload:productId,
    };
};

export const decreaseQunatity = (productId) =>{
    return{
        type:DECREASE_QUANTITY,
        payload:productId,
    };
};