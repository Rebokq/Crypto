import React, { useState } from "react"
import useAxios from "../hooks/useAxios"
import Coin from "./coin/Coin"
import { Pagination } from "@mui/material"
import GuidedTour from './guide/GuidedTour'

const Markets = () => {
  const { response, loading } = useAxios("coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  const [page, setPage] = useState(1);
  return (
    <div className="py-6 bg-slate-50 mt-4 p-4 rounded-lg">
      
      <div className="font-semibold text-xl py-6 flex align-center align-middle content-center">
        <h1 className="mr-4">Cryptocurrency Prices by Market Cap</h1>
         <GuidedTour className="pl-6" />
      </div>
      <span></span>

      <table className="table w-full">

        <thead className="table-header-group">
          <tr>
            <th className="table-cell text-left "> </th>
            <th className="rank table-cell text-left ">#</th>
            <th className="coin table-cell text-left ">Coin</th>
            <th className="price table-cell text-left ">Price</th>
            <th className="percentage table-cell text-left mr-4 ">24h %</th>
            <th className="market-cap table-cell text-left ">Market Cap</th>
          </tr>
        </thead>

        {response && response
          .slice((page - 1) * 10, (page - 1) * 10 + 10)
          .map(coin => <Coin key={coin.id} coin={coin} />)}
      </table>
      <Pagination className="flex items-center justify-center mt-8" 
                  count={(response?.length / 10).toFixed(0)} 
                  onChange={(_, value) => {
                  setPage(value);
                  }} 
       />
    </div>
  )
}

export default Markets