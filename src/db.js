
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



import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
// import "firebase/auth"
// import firebase from "firebase/database"
// import ShopKipperUsers from "./page/shopkipper/shopkipperuser";
const firebaseConfig = {
  apiKey: "AIzaSyCDh__FZDsAe83Lb-K8kw6UJ1poFD1KQnk",
  authDomain: "pretanode.firebaseapp.com",
  projectId: "pretanode",
  storageBucket: "pretanode.appspot.com",
  messagingSenderId: "212141452853",
  databaseURL: "https://pretanode-default-rtdb.firebaseio.com/",
};
// firebase.initilizeApp(firebaseConfig)
// const database =getDatabase(ShopKipperUsers);
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
