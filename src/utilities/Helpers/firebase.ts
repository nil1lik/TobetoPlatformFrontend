import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA6Zpe7vtHzsiNZiUpUPj2RRZBAsErw7Lc",
    authDomain: "tobetoplatformpair1.firebaseapp.com",
    databaseURL: "https://tobetoplatformpair1-default-rtdb.firebaseio.com",
    projectId: "tobetoplatformpair1",
    storageBucket: "tobetoplatformpair1.appspot.com",
    messagingSenderId: "656800810894",
    appId: "1:656800810894:web:3e8cd4446237b94ed4c6df",
    measurementId: "G-YXML3GQQBF",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imageDb = getStorage(app);
