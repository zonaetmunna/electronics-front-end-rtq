import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// config firebase
const firebaseConfig = {
  apiKey: "AIzaSyDL-feguI60GdLjFh7_AaUq5JqbXNZjxU4",
  authDomain: "electroncis-rtk.firebaseapp.com",
  projectId: "electroncis-rtk",
  storageBucket: "electroncis-rtk.appspot.com",
  messagingSenderId: "892685332144",
  appId: "1:892685332144:web:066aa1b387837ee0881575",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// export
export default auth;
