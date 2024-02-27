import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { push, DatabaseReference, get, getDatabase, ref, set, onValue } from "firebase/database";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyA6Zpe7vtHzsiNZiUpUPj2RRZBAsErw7Lc",
//     authDomain: "tobetoplatformpair1.firebaseapp.com",
//     projectId: "tobetoplatformpair1",
//     storageBucket: "tobetoplatformpair1.appspot.com",
//     messagingSenderId: "656800810894",
//     appId: "1:656800810894:web:6fb637b7e8c695b4d4c6df",
//     measurementId: "G-67N8LQVV3S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase();

// export const writeUserData = (userId: number, name: string, email: string, imageUrl: string) => {
//     const reference = ref(db, "users/" + userId);

//     set(reference, {
//         username: name,
//         email: email,
//         profile_picture: imageUrl,
//     });
// };

// export const writeUserCertificate = (userId: number, certificateUrl: string) => {
//     const certificateRef = ref(db, "users/" + userId +"/certificates");
//     const newCertificateRef = push(certificateRef); // Yeni bir anahtar oluşturulur
//     set(newCertificateRef, { certificate: certificateUrl });
// };

// export const readUserData = (userId: number) => {
//     const userRef = ref(db, "users/" + userId);

//     onValue(userRef, (snapshot) => {
//         const data = snapshot.val();
//     });
// };

// // Kullanıcı sertifikalarını okuma işlevi
// export const readUserCertificates = (userId: number) => {
//     const certificateRef = ref(db, "users/" + userId + "/certificates");

//     onValue(certificateRef, (snapshot) => {
//         const certificates = snapshot.val();
//         // console.log("Kullanıcı sertifikaları:", certificates);
//     });
// };



// // writeUserData(1, "contaogli", "contaogli@gmail.com", "imageurlfalan");
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
