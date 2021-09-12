// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAvw-Lm29ji4Ft0WU0oGU1mkLpNW_HdBr4',
  authDomain: 'crown-a0c8e.firebaseapp.com',
  projectId: 'crown-a0c8e',
  storageBucket: 'crown-a0c8e.appspot.com',
  messagingSenderId: '454877337510',
  appId: '1:454877337510:web:404919e13c2b81aaa0e167',
  measurementId: 'G-TQXHBJMVLK',
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

// export default firebase;
