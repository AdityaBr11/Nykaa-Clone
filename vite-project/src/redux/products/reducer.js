import * as types from './actionType';


const initialState={
    products:[],
    cart:[],
    cartItem:[],
    isLoading:false,
    isError:false,
}
const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_PRODUCTS_REQUEST:{
            return{
                ...oldState,
                isLoading:true
            }
        }
        case types.GET_PRODUCTS_SUCESS:{
            return{
                ...oldState,
                isLoading:false,
                products:payload,
            }
        }
        case types.GET_PRODUCTS_ERROR:{
            return{
                ...oldState,
                isLoading:false,
                isError:true,
            }
        }
        case types.ADD_CART_REQ:{
            return{
                ...oldState,
                isLoading:true
            }
        }
        case types.ADD_CART_SUCESS:{
            return{
                ...oldState,
                isLoading:false,
                cart:[...oldState.cart,payload],
            }
        }
        case types.ADD_CART_ERROR:{
            return{
                ...oldState,
                isLoading:false,
                isError:true,
            }
        }
        case types.GET_CART_REQ:{
            return{
                ...oldState,
                isLoading:true
            }
        }
        case types.GET_CART_SUCESS:{
            return{
                ...oldState,
                isLoading:false,
                cartItem:payload,
            }
        }
        case types.GET_CART_ERROR:{
            return{
                ...oldState,
                isLoading:false,
                isError:true,
            }
        }
        default:{
            return oldState
        }
    }
}
export {reducer};