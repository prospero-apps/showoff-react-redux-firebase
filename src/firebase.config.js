import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZ6Abp64SgVN3-PWNUrUMIvJRAVTwJs0Y",
  authDomain: "showoff-react-redux-firebase.firebaseapp.com",
  projectId: "showoff-react-redux-firebase",
  storageBucket: "showoff-react-redux-firebase.appspot.com",
  messagingSenderId: "892439717772",
  appId: "1:892439717772:web:94a6a96f19ae84d6e998a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()