import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from "chart.js";
import * as dashBoard from "../service/DashBoard";
import React, { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

export default function MovieSaleChart() {
  const [movies, setMovie] = useState();

  useEffect(() => {
    getAll();
    console.log(getAll());
  }, []);

  const getAll = async () => {
    try {
      const temp = await dashBoard.findAllMovieSales();
      setMovie(temp);
    } catch (err) {
      console.log(err);
    }
  };
  const data = {
    labels: movies?.map((movie) => movie.movieName), // Lấy tên phim từ mảng movies
    datasets: [
      {
        label: `${movies?.length} Movies Avalable`,
        data: movies?.map((movie) => movie.totalPriceTicket),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return <Bar data={data} options={options}></Bar>;
}
