// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeGdB1XCt1qlH_pNtx22Kp3HmzP7_Xlnw",
  authDomain: "docpoint-9356a.firebaseapp.com",
  databaseURL: "https://docpoint-9356a-default-rtdb.firebaseio.com",
  projectId: "docpoint-9356a",
  storageBucket: "docpoint-9356a.appspot.com",
  messagingSenderId: "119246374387",
  appId: "1:119246374387:web:2fa25a940c0ac20d513e86",
  measurementId: "G-WTDZLTNG02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app };