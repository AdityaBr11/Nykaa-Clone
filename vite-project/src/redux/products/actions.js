import axios from 'axios';
import * as types from './actionType';

const getProductsReq=()=>{
    return{
        type:types.GET_PRODUCTS_REQUEST,
    }
}
const getProductsSucess=(payload)=>{
    return{
        type:types.GET_PRODUCTS_SUCESS,
        payload
    }
}
const getProductsError=()=>{
    return{
        type:types.GET_PRODUCTS_ERROR,
    }
}
const addCartReq=()=>{
    return{
        type:types.ADD_CART_REQ,
    }
}
const addCartSucess=(payload)=>{
    return{
        type:types.ADD_CART_SUCESS,
        payload
    }
}
const addCartError=()=>{
    return{
        type:types.ADD_CART_ERROR,
    }
}

const getCartReq=()=>{
    return{
        type:types.GET_PRODUCTS_REQUEST,
    }
}
const getCartSucess=(payload)=>{
    return{
        type:types.GET_PRODUCTS_SUCESS,
        payload
    }
}
const getCartError=()=>{
    return{
        type:types.GET_PRODUCTS_ERROR,
    }
}



const getProducts=(params) =>dispatch =>{
    dispatch(getProductsReq())
    return axios.get('https://nykaa-data-base.vercel.app/product',params).then((r)=>{
        dispatch(getProductsSucess(r.data))
    }).catch(e=>{
        dispatch(getProductsError())
    })
}

const addCarts=(payload) =>dispatch =>{
    dispatch(addCartReq())
    return axios.post('https://nykaa-data-base.vercel.app/cart',payload).then((r)=>{
        dispatch(addCartSucess(r.data))
    }).catch(e=>{
        dispatch(addCartError())
    })

}
const getCartItem=() =>dispatch =>{
    dispatch(getCartReq())
    return axios.get('https://nykaa-data-base.vercel.app/cart').then((r)=>{
        dispatch(getCartSucess(r.data))
    }).catch(e=>{
        dispatch(getCartError())
    })
}



const deleteProductRequest = () => {
    return {
        type: types.DELETE_PRODUCT_REQUEST
    }
}
const deleteProductSuccess = (payload) => {

    return {
        type: types.DELETE_PRODUCT_SUCCESS,
        payload
    }
}
const deleteProductFailure = () => {
    return {
        type: types.DELETE_PRODUCT_FAILURE,

    }
}
const deleteProducts = (id) => (dispatch) => {
    dispatch(deleteProductRequest())
    return axios
        .delete(`https://nykaa-data-base.vercel.app/cart/${id}`)
        .then((result) => {
            dispatch(deleteProductSuccess(result.data))

        })
        .catch((error) => {
            dispatch(deleteProductFailure())
        })
}


export {getProducts,addCarts,getCartItem,deleteProducts}