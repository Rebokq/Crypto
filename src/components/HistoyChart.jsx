import React from "react"
import { useParams } from "react-router-dom"
import useAxios from "../hooks/useAxios";
import moment from "moment"
import Skeleton from "./coin/Skeleton";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const HistoyChart = () => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}/market_chart?vs_currency=eur&days=30&interval=daily`);
    console.log(response);

    if (!response) {
        return (
            <div>
                <Skeleton className="h-72 w-full mb-10" />
            </div>
        )
    }

    const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }))

    const options = {
        responsive: true
    }
    const data = {
        labels: coinChartData.map(value => moment(value.x).format("MMM DD")),
        datasets: [
            {
                fill: true,
                label: id,
                data: coinChartData.map(val => val.y),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            }
        ]
    }

    return (
        <div className="bg-slate-100 mt-4 p-4 rounded-xl">
            <h3 className="font-semibold"><span className="uppercase">{id}</span> Price Chart</h3>
            <div className="col-md-4">
                <Line data={data} height="200px" width="200px" options={{ maintainAspectRatio: false }} />
            </div>
        </div>
    )
}

export default HistoyChart