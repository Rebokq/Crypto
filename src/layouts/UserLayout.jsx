import React from 'react'
import { useOutlet } from "react-router-dom";
import CoinNav from '../components/coin/CoinNav';
import Navbar from "../components/Navbar.jsx";

const UserLayout = () => {
    const outlet = useOutlet();

    return (
        <div>
    <div className="wrapper-container p-8 m-8">
        <CoinNav />
        <div>{outlet}</div>
        </div>
        </div>
    )
}

export default UserLayout