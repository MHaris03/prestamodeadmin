import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom'
import { DarkModeContext } from "../../context/darkModeContext";
import logo3 from '../main image.jpeg';
const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
            <div className='row'>
                <div className='logos'>
                    <img src={logo3} alt=""  ></img>
                </div>
                <div className='center'>
                    <b><p>Presta  Mode</p> </b>
                </div>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <Link to='/' style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className='title'>LISTS</p>
                    <Link to='/users' style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className='title'>ADD PRODUCTS</p>
                    <Link to='/AddData' style={{ textDecoration: "none" }}>
                        <li>
                            <InsertChartIcon className='icon' />
                            <span>Plan Products</span>
                        </li>
                    </Link>
                    <Link to='/ByShip' style={{ textDecoration: "none" }}>
                        <li>
                            <InsertChartIcon className='icon' />
                            <span>Boat Products</span>
                        </li>
                    </Link>
                    <Link to='/Private' style={{ textDecoration: "none" }}>
                        <li>
                            <InsertChartIcon className='icon' />
                            <span>Private Sales Products</span>
                        </li>
                    </Link>
                    <Link to='/AddData' style={{ textDecoration: "none" }}>
                        <li>
                            <InsertChartIcon className='icon' />
                            <span>On Demand Products</span>
                        </li>
                    </Link>

                    <p className='title'>SHOW PRODUCTS</p>
                    <Link to='/ShowProducts' style={{ textDecoration: "none" }}>
                        <li>
                            <SettingsSystemDaydreamOutlinedIcon className='icon' />
                            <span>Show Products</span>
                        </li>
                    </Link>
                    <p className='title'>ADD ADDRESS</p>
                    <Link to='/Address' style={{ textDecoration: "none" }}>
                        <li>
                            <LocalShippingIcon className='icon' />
                            <span>Address</span>
                        </li>
                    </Link>

                    <p className='title'>USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    )
}

export default Sidebar