import React from "react"
import { Link } from "react-router-dom"

const CoinTrending = ({ coin }) => {
  console.log(coin)

  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="mb-2 border-2 border-gray-300 hover:bg-gray-300 p-2 mx-4">

        <div className="flex items-center gap-1">
          <span>{coin.score + 1}.</span>
          <img className="w-6" src={coin.small}></img>
          <p>{coin.name}</p>
          <small className="text-xs">({coin.symbol})</small>
        </div>
      </div>
    </Link>
  )
}

export default CoinTrending