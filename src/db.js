
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// const firebaseConfig = {
//   apiKey: "AIzaSyCDh__FZDsAe83Lb-K8kw6UJ1poFD1KQnk",
//   authDomain: "pretanode.firebaseapp.com",
//   projectId: "pretanode",
//   storageBucket: "pretanode.appspot.com",
//   messagingSenderId: "212141452853",
//   appId: "1:212141452853:web:96b48ccb830613ea754b7c",
//   measurementId: "G-EGB8LSGRYT"
// };

//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app)
// const database = getFirestore(app);
// export default db;



// import firebase from 'firebase/database'

// const congfig ={
//   apiKey: "AIzaSyCDh__FZDsAe83Lb-K8kw6UJ1poFD1KQnk",
//   authDomain: "pretanode.firebaseapp.com",
//   projectId: "pretanode",
//   storageBucket: "pretanode.appspot.com",
//   messagingSenderId: "212141452853",
// };
// firebase.initilizeApp(congfig)
// export default firebase



import { getDatabase } from "@firebase/database";
import { initializeApp } from "firebase/app";
import "firebase/auth"
import "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyCDh__FZDsAe83Lb-K8kw6UJ1poFD1KQnk",
  authDomain: "pretanode.firebaseapp.com",
  projectId: "pretanode",
  storageBucket: "pretanode.appspot.com",
  messagingSenderId: "212141452853",
};
// firebase.initilizeApp(firebaseCongfig)
// const database =getDatabase(app);
const Firebaseapp = initializeApp(firebaseConfig);
const db = getDatabase(Firebaseapp);
export default db;
