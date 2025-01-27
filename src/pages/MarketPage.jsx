import React from "react"
import Markets from "../components/Markets"
import Trending from "../components/Trending"
import CoinNav from "../components/coin/CoinNav"

const Home = () => {

  return (
    <div className="wrapper-container p-8">
      <Trending />
      <Markets />
    </div>
  )
}

export default Home