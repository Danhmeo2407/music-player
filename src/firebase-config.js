import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
<<<<<<< HEAD
=======
import { getStorage } from 'firebase/storage'
>>>>>>> 99781a4 (first commit)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDV7d3wXfJUeYxZwvYtnidZHtcgvTLFGoY",
//   authDomain: "apimusic-c2066.firebaseapp.com",
//   projectId: "apimusic-c2066",
//   storageBucket: "apimusic-c2066.appspot.com",
//   messagingSenderId: "482635646574",
//   appId: "1:482635646574:web:3a327348fd5fbdf2ac487f"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA6cp9zr4wRqZ5xnx8WsQQ2cNgVMK9pS3Q",
  authDomain: "music-dc229.firebaseapp.com",
  databaseURL: "https://music-dc229-default-rtdb.firebaseio.com",
  projectId: "music-dc229",
  storageBucket: "music-dc229.appspot.com",
  messagingSenderId: "67045004072",
  appId: "1:67045004072:web:621e4a3f1b186c5a3cf61d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
<<<<<<< HEAD
=======
export const storage = getStorage(app);
>>>>>>> 99781a4 (first commit)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();