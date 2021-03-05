import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
    
    // apiKey: "AIzaSyDkXIHTrvNVpiJvdAJ3rquoYBqQVqPhZWM",
    // authDomain: "dayindayout.firebaseapp.com",
    // databaseURL: "https://dayindayout-default-rtdb.firebaseio.com",
    // projectId: "dayindayout",
    // storageBucket: "dayindayout.appspot.com",
    // messagingSenderId: "213176321368",
    // appId: "1:213176321368:web:4a82db335bfed92851d12d"  
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database as default, googleAuthProvider };