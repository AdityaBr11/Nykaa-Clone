import * as types from "./actionTypes";
import { auth ,googleAuthProvider} from "../../firebase/firebase";

export const signupLoading = () => ({
  type: types.SIGNUP_LOADING,
});
export const signupSuccess = (user) => ({
  type: types.SIGNUP_SUCCESS,
  payload: user,
});
export const signupError = (err) => ({
  type: types.SIGNUP_ERROR,
  payload: err,
});

export const googleSignupLoading = () => ({
    type: types.GOOGLE_SIGNUP_LOADING
  });
  export const googleSignupSuccess = (user) => ({
    type: types.GOOGLE_SIGNUP_SUCCESS,
    payload: user,
  });
  export const googleSignupError = (err) => ({
    type: types.GOOGLE_SIGNUP_ERROR,
    payload: err,
  });




export const loginLoading = () => ({
  type: types.LOGIN_LOADING,
});
export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});
export const loginError = (err) => ({
  type: types.LOGIN_ERROR,
  payload: err,
});

export const logoutLoading = () => ({
  type: types.LOGOUT_LOADING,
});
export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
export const logoutError = (err) => ({
  type: types.LOGOUT_ERROR,
  payload: err,
});

export const setUser=(Cuser)=>({
    type:types.SET_USER,
    payload:Cuser,
})
export const signup = (displayName, email, password) => {
  return function (dispatch) {
    dispatch(signupLoading());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(signupSuccess(user));
      })
      .catch((err) => dispatch(signupError(err.message)));
  };
};


export const googleSignup = () => {
    return function (dispatch) {
      dispatch(googleSignupLoading());
      auth
        .signInWithPopup(googleAuthProvider)
        .then(({ user }) => {
          dispatch(googleSignupSuccess(user));
        })
        .catch((err) => dispatch(googleSignupError(err.message)));
    };
  };




export const login = (email, password) => {
  return function (dispatch) {
    dispatch(loginLoading());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((err) => dispatch(loginError(err.message)));
  };
};



export const userlogout = () => {
  return function (dispatch) {
    dispatch(logoutLoading());
    auth
      .signOut()
      .then((res) => dispatch(logoutSuccess()))
      .catch((err) => dispatch(logoutError(err.message)));
  };
};
