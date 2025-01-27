import React from "react"
import useAxios from "../hooks/useAxios"
import CoinTrending from "./coin/CoinTrending";

const Trending = () => {
    const { response } = useAxios("search/trending");
    
    return (
      <div className="mt-8">
        <h1 className="font-semibold text-xl py-6">Trending</h1>
        {response && response.coins.map(coin => <CoinTrending key={coin.item.coin_id} coin={coin.item} />)}
      </div>
    )
}

export default Trending