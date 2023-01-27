import * as types from "./actionTypes";

const initialState = {
  loading: false,
  newUser:null,
  currentUser: null,
  error: null,
  status: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_LOADING:
    case types.LOGOUT_LOADING:
    case types.GOOGLE_SIGNUP_LOADING:
      case types.LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        status:true
      };
      
    
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        newUser: action.payload,
        currentUser:null,
        status: 'signup success',
        error: null,
      };

    case types.LOGIN_SUCCESS:
    case types.GOOGLE_SIGNUP_SUCCESS:
    case types.SET_USER:
      return {
        ...state,
        loading: false,
        newUser:null,
        currentUser: action.payload,
        status: 'login success',
        error: null,
      };

    case types.SIGNUP_ERROR:
    case types.LOGOUT_ERROR:
    case types.GOOGLE_SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        status: "error",
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        status: false,
      };
    default:
      return state;
  }
};

export  {reducer};
