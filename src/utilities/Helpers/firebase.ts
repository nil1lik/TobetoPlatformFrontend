import firebase from "firebase/app";
import "firebase/database";

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://test-8e62e-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase uygulamasını başlatma
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Veritabanı referansını alın
const dbRef = firebaseApp.database().ref();

export default dbRef;
