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

const getProducts=(params) =>dispatch =>{
    dispatch(getProductsReq())
    return axios.get('https://nykaa-data-base.vercel.app/product',params).then((r)=>{
        dispatch(getProductsSucess(r.data))
    }).catch(e=>{
        dispatch(getProductsError())
    })
}
export {getProducts}