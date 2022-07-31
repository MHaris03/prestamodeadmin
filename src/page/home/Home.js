import React, { useState,useEffect } from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Charts from '../../components/charts/Charts'
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table'
import {  onSnapshot, collection, query, } from "firebase/firestore";
import db from '../../db';

import { getDatabase, ref, onValue} from "firebase/database";
import LoadingSpin from "react-loading-spin";
const Home = () => {
    const [users,setUser] = useState([]);
    const [Clintusers,setClintusers] = useState([]);
    const [Loader,serLoader] = useState(false)
    useEffect(() => {
        const db = getDatabase();
    const starCountRef = ref(db, 'prestamodeUser/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log("data in use effect",Object.values(data))
      setUser(Object.values(data))
    });
     const starCountRef1 = ref(db, 'user/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log("data in use effect",Object.values(data))
      setClintusers(Object.values(data))
    });
      }, [])
    return (
        <div>
            {
Loader===true?
<div className="loader">
<LoadingSpin size={50} />
</div>
:
<div className='home'>
<Sidebar />
<div className='homeContainer'>
    <Navbar />
    <div className='widgets'>
        <Widgets type="user" value={Clintusers.length+users.length}/>
        <Widgets type="order" value={1}/>
        <Widgets type="earning" value={1}/>
        <Widgets type="balance" value={users.length}/>
    </div>
    <div className='charts'>
        <Featured />
        <Charts title="Last 6 Months (Revenue)" aspect={2 / 1} />
    </div>
    <div className='listContainer'>
        <div className='listTitle'>Latest Orders</div>
        {/* <Table value={cart}/> */}
    </div>
</div>
</div>
            }
        </div>
       
    )
}

export default Home