import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

// init firebase app
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;

// init services
// const db = getFirestore()

// // collection ref
// const colRef = collection(db, 'users');

// // get collection data - returns a Promise
// getDocs(colRef)
//   .then((snapshot) => {
//     console.log(snapshot.docs);
//   })