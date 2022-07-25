import React, { useContext, useEffect } from "react";
import "./style/dark.scss";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import List from "./page/list/List";
import SinglePage from "./page/single/Single";
import NewPage from "./page/new/New";
import AddData from "./page/Add Product/plan";
import ByShip from "./page/Add Product/ship";
import Private from "./page/Add Product/private";
import BoatProduct from "./page/showProduct/boatProduct";
import ShowProducts from "./page/showProduct/showProduct";
import PrivateSale from "./page/showProduct/privateSale";
import Address from "./page/address/address";
import { getDatabase, ref, set } from "firebase/database";
import { productInputs, userInputs } from "./formSource";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { auth } from './config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import db from './db';
import { collection, addDoc } from "firebase/firestore";
import firebase from "./db";
const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const prestamodedeRef = db.ref("prestamodeUser");
    const newGamesRef = prestamodedeRef.push();
    newGamesRef.set({


    })

  }, [])
  const login = async () => {
    console.log("Auth", auth)
    createUserWithEmailAndPassword(auth, 'abc987@gmail.com', '123456')
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user", user, userCredential)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("errorCode", errorCode, errorMessage)
      });

  };
  const Fetchdata = async () => {
    console.log('Fetchdata ready');

    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan"
    });
    console.log("Document written with ID: ", docRef.id);
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" index element={<Login />} />
            <Route path='users' >
              <Route index element={<NewPage inputs={userInputs} title="Add New User" />} />
              <Route path=':userId' element={<SinglePage />} />
              <Route path='new' element={<NewPage inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<SinglePage />} />
              <Route path='new' element={<NewPage inputs={productInputs} title="Add New Product" />} />
            </Route>
            <Route path='AddData' element={<AddData />} />
            <Route path='ByShip' element={<ByShip />} />
            <Route path='ShowProducts' element={<ShowProducts />} />
            <Route path='BoatProduct' element={<BoatProduct />} />

            <Route path='PrivateSaleProduct' element={<PrivateSale />} />
            <Route path='Private' element={<Private />} />

            <Route path='Address' element={<Address />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
};

export default App;


