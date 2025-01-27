import React from 'react'
import { Link } from 'react-router-dom'
import Trending from '../Trending'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CoinNav = () => {
    return (
        <div className='flex border-b p-2 space-x-6 items-center align-center'>
            <Link to={"favorite"} className="hover:bg-slate-200 p-2"><StarBorderIcon /> Favorite</Link>
            <Link to={""} className="hover:bg-slate-200 p-2">Coins</Link>
            <Link to={"trend"}className="hover:bg-slate-200 p-2">Trend</Link>
        </div>
    )
}

export default CoinNav