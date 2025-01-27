import React from 'react'
import useAxios from "../hooks/useAxios"
import Skeleton from "./coin/Skeleton";
import { currencyFormat } from "../utils"
import { TrendingDown, TrendingUp } from "../icons/icons"
import { Link } from 'react-router-dom';
import HomeGuidedTour from './guide/HomeGuidedTour'

const Home = () => {
  const { response } = useAxios("coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  console.log(response)

  if (!response) {
    return (
      <div className="wrapper-container mt-8 p-36">
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    )
  }
  return (
    <div>
      <div className="grid grid-cols-2 p-36 ">
        <div className="row-span-2 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-center">
            Explore Top Crypto's Like <br />
            Bitcoin, Etherum, and Dogecoin
          </h1>
          <p className="my-6">
            See all available Cryptocurrencies
          </p>
          <div className='flex'>
          <Link to={"market"}><button className="rounded-l-xl bg-amber-400 p-4 px-8 hover:scale-105">See More Coins</button></Link>
          <HomeGuidedTour />
          </div>
        </div>

        <div className='grid grid-cols-3 grid-rows-2 '>
          <div className=" flex flex-col items-center justify-center rounded-xl shadow-2xl border border-slate-200 p-4 space-y-2 mr-2 hover:scale-105 cursor-pointer">
            <img src={response[0].image} className="w-24" />
            <span>{response[0].name}</span>
            <span>{currencyFormat(response[0].current_price)}</span>
            <span className={`flex gap-1 items-center ${response[0].price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
              {response[0].price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
              {(response[0].price_change_percentage_24h).toFixed(1)}
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center rounded-xl shadow-2xl border border-slate-200 p-4 space-y-2 mr-2 hover:scale-105 cursor-pointer">
            <img src={response[1].image} className="w-24" />
            <span>{response[1].name}</span>
            <span>{currencyFormat(response[1].current_price)}</span>
            <span className={`flex gap-1 items-center ${response[1].price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
              {response[1].price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
              {(response[1].price_change_percentage_24h).toFixed(1)}
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center rounded-xl shadow-2xl border border-slate-200 p-4 space-y-2 mr-2 hover:scale-105 cursor-pointer">
            <img src={response[2].image} className="w-24" />
            <span>{response[2].name}</span>
            <span>{currencyFormat(response[2].current_price)}</span>
            <span className={`flex gap-1 items-center ${response[2].price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
              {response[2].price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
              {(response[2].price_change_percentage_24h).toFixed(1)}
            </span>
          </div>


          <div className=" flex flex-col items-center justify-center rounded-xl shadow-2xl border border-slate-200 p-4 mt-4 mr-2 hover:scale-105 cursor-pointer">
            <img src={response[3].image} className="w-24" />
            <span>{response[3].name}</span>
            <span>{currencyFormat(response[2].current_price)}</span>
            <span className={`flex gap-1 items-center ${response[3].price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
              {response[3].price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
              {(response[3].price_change_percentage_24h).toFixed(1)}
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center rounded-xl shadow-2xl border border-slate-200 p-4 mt-4 mr-2 hover:scale-105 cursor-pointer">
            <img src={response[4].image} className="w-24" />
            <span>{response[4].name}</span>
            <span>{currencyFormat(response[4].current_price)}</span>
            <span className={`flex gap-1 items-center ${response[4].price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
              {response[4].price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
              {(response[4].price_change_percentage_24h).toFixed(1)}
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center rounded-xl shadow-2xl border border-slate-200 p-4 mt-4 mr-2 hover:scale-105 cursor-pointer">
            <img src={response[5].image} className="w-24" />
            <span>{response[5].name}</span>
            <span>{currencyFormat(response[5].current_price)}</span>
            <span className={`flex gap-1 items-center ${response[5].price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
              {response[5].price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
              {(response[5].price_change_percentage_24h).toFixed(1)}
            </span>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home