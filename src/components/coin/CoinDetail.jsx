import React, { useState } from "react"
import { useParams } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import Skeleton from "./Skeleton";
import { TrendingDown, TrendingUp } from "../../icons/icons"

import { currencyFormat } from "../../utils"
import Chip from "@mui/material/Chip";
import HistoyChart from "../HistoyChart";
import HistoryChart2 from "../chart/HistoryChart2";

const CoinDetail = () => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&sparkline=false()`)

    if (!response) {
        return (
            <div className="wrapper-container mt-8">
                <Skeleton className="h-8 w-32 mb-4" />
                <Skeleton className="h-72 w-full mb-10" />
            </div>
        )
    }

    return (
        <div className="bg-slate-50 p-8 rounded-xl">
            <Chip label={`Rank #${response.market_cap_rank}`} className="mb-2 text-lg font-bold" />
            <div className="flex items-center gap-2">
                <img src={response.image.small} alt={response.name} />
                <p className="font-bold text-black text-xl">{response.name}</p>
                <span className="uppercase font-bold">({response.symbol})</span>
            </div>
            <div className="flex space-x-2">
                <p className="font-bold text-xl py-4">{currencyFormat(response.market_data.current_price.eur)}</p>
                <span className={`text-xs flex gap-1 items-center ${response.market_data.price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
                    {response.market_data.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                    {(response.market_data.price_change_percentage_24h).toFixed(1)}
                </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-100 p-4 rounded-lg text-justify col-span-2">
                    <h3 className="text-xl font-semibold mb-4">{response.name} History</h3>

                    <p className="indent-8" dangerouslySetInnerHTML={{ __html: response.description.en }}></p>

                </div>
                <div className="bg-slate-100 rounded-xl p-4  gap-y-4">
                    <h3 className="text-xl font-semibold mb-4"><span className="uppercase">{response.symbol}</span> Price Statitics</h3>

                    <div className="flex justify-between py-4 border-b border-slate-300">
                        <p>{response.name} Price</p>
                        <p className="">{currencyFormat(response.market_data.current_price.eur)}</p>
                    </div>

                    <div className="flex justify-between py-4 border-b border-slate-300">
                        <p>24h Low / 24h High</p>
                        <p className="">{currencyFormat(response.market_data.low_24h.eur)} / {currencyFormat(response.market_data.high_24h.eur)}</p>
                    </div>

                    <div className="flex justify-between py-4 border-b border-slate-300">
                        <p>Trading Volume</p>
                        <p className="">{currencyFormat(response.market_data.total_volume.eur)}</p>
                    </div>
                    <div className="flex justify-between py-4 border-b border-slate-300">
                        <p>Market Cap Rank</p>
                        <p className="">#{response.market_cap_rank}</p>
                    </div>
                    <div className="flex justify-between py-4 border-b border-slate-300">
                        <p>Market Cap</p>
                        <p className="">{currencyFormat(response.market_data.market_cap.eur)}</p>
                    </div>
                </div>
            </div>

             <HistoyChart /> 
            {/**<HistoryChart2 />*/}
        </div>
    )
}

export default CoinDetail