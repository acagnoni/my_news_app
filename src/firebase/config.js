//import * as firebase from 'firebase';
import '@firebase/auth';
//import '@firebase/firestore';

import firebase from 'firebase' // import the sdk


const firebaseConfig = {
    apiKey: "AIzaSyB2g17I7q_TDMZ6cTHqrJELtmL9GwiqwAw",
    authDomain: "searchforsavings-b47fe.firebaseapp.com",
    databaseURL: "https://searchforsavings-b47fe.firebaseio.com",
    projectId: "searchforsavings-b47fe",
    storageBucket: "searchforsavings-b47fe.appspot.com",
    messagingSenderId: "761809437459",
    appId: "1:761809437459:web:6572d3ed82fe20094190e6",
    measurementId: "G-4DK7M8MPRB"
};

firebase.initializeApp(firebaseConfig);

export { firebase };