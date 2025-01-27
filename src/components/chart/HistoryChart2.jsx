import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CircularProgress,
  createTheme,
  makeStyles,
} from "@mui/material";
import SelectButton from "./SelectButton";
import { chartDays } from "./data";
import { CryptoState } from "./CryptoContext";


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
import useAxios from "../../hooks/useAxios";

const HistoricalChart = (id, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${days}`;

const CoinInfo = ({ coin }) => {
  const { response } = useAxios(`coins/${id}/market_chart?vs_currency=eur&days=${days}`);
  const { id } = useParams();
  const [days, setDays] = useState(1);
  console.log(response)


  const [historicData, setHistoricData] = useState();



  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days));
    setHistoricData(data.prices);
  };

  console.log(coin);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);


  return (

    <div className="" style={{
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,

    }}
    >
      {!historicData ? (
        <CircularProgress
          style={{ color: "gold" }}
          size={250}
          thickness={1}
        />
      ) : (
        <>
          <Line
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),

                },
              ],
            }}

          />
        </>
      )}
    </div>

  );
};

export default CoinInfo;