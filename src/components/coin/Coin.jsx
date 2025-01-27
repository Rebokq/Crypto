

import React from "react"
import { Link } from "react-router-dom";
import { TrendingDown, TrendingUp } from "../../icons/icons"
import { currencyFormat } from "../../utils"
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Coin = ({ coin }) => {
  console.log(coin)

  return (

    <tbody className="hover:bg-slate-100 border-b">
      <tr className="">
        <td>
          <StarBorderIcon className="cursor-pointer" />
        </td>
        {/** RANK */}
        <td className="">
          <span>{coin.market_cap_rank}.</span>
        </td>
        {/** COIN */}
        <td>
          <Link to={`/coin/${coin.id}`}>
            <div className="flex items-center gap-1 py-2 w-full">
              <img className="w-6" src={coin.image}></img>
              <p className="font-semibold">{coin.name}</p>
              <small className="text-xs">({coin.symbol})</small>
            </div>
          </Link>
        </td>
        {/** PRICE */}
        <td>
          <span className="text-sm flex items-center">{currencyFormat(coin.current_price)}</span>
        </td>
        {/** 24H */}
        <td>
          <span className={`text-sm flex gap-1 items-center ${coin.price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
            {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
            {(coin.price_change_percentage_24h).toFixed(1)}
          </span>
        </td>
        <td>
          <span className="text-sm">{currencyFormat(coin.market_cap)}</span>
        </td>
      </tr>
    </tbody>

  )
}

export default Coin