import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBzH_bTv0qRbx19zLsbS0VypitjXV5ShYM",
    authDomain: "dating-app-mern-56cfd.firebaseapp.com",
    projectId: "dating-app-mern-56cfd",
    storageBucket: "dating-app-mern-56cfd.appspot.com",
    messagingSenderId: "800811786313",
    appId: "1:800811786313:web:023a29e3a4314071b05f98"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider};
export default db;