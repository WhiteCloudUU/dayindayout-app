import * as firebase from 'firebase'

const config = {
    // apiKey: "AIzaSyAoLaVa87Yh7EzQOIKtMhnGzPSu22o1Tys",
    // authDomain: "jinzhao-expensify-app.firebaseapp.com",
    // databaseURL: "https://jinzhao-expensify-app-default-rtdb.firebaseio.com",
    // projectId: "jinzhao-expensify-app",
    // storageBucket: "jinzhao-expensify-app.appspot.com",
    // messagingSenderId: "739402244606",
    // appId: "1:739402244606:web:7fb1e6ed7ae7ba91a9e0af",
    // measurementId: "G-KWSTB8LY7P"
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID  
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database as default, googleAuthProvider }