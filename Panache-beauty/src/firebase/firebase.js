
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBh7LGy-h-4kCZ03sfDKbFnWNLMty0Hs8o",
  authDomain: "nykaa-app-47041.firebaseapp.com",
  projectId: "nykaa-app-47041",
  storageBucket: "nykaa-app-47041.appspot.com",
  messagingSenderId: "242594448023",
  appId: "1:242594448023:web:7b996333a33cfa01009fd2"
};

  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();

  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

  export {auth,googleAuthProvider}