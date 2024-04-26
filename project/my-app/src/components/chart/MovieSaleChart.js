import * as dashBoard from "../service/DashBoard";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Chart from "react-apexcharts";

export default function MovieSaleChart() {
  const [movies, setMovie] = useState();
  const [lgShow, setLgShow] = useState(false);
  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    try {
      const temp = await dashBoard.findAllMovieSales();
      setMovie(temp);
    } catch (err) {
      console.log(err);
    }
  };
  const series = [
    {
      name: "Revenue",
      type: "column",
      data: movies?.map((movie) => movie.totalPriceTicket),
    },
    {
      name: "Tickets",
      type: "line",
      data: movies?.map((movie) => movie.countTicket),
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    dataLabels: {
      enabled: true,
      // enabledOnSeries: [1]
    },
    labels: movies?.map((movie) => movie.movieName),
    xaxis: {
      type: "String",
    },
    yaxis: [
      {
        title: {
          text: "Revenue",
        },
      },
      {
        opposite: true,
        title: {
          text: "Tickets",
        },
      },
    ],
  };

  return (
    <>
      <Chart type="line" series={series} options={options} height={350}></Chart>
      <Button onClick={() => setLgShow(true)}>Show all</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Top 100 Movies
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Movie</th>
                <th scope="col">Total Tickets</th>
                <th scope="col">Total Revenue</th>
              </tr>
            </thead>
            <tbody>
            {movies?.map((movie, index) => (
            <tr key={movie.id}>
              <td>{index}</td>
              <td>{movie.movieName}</td>
              <td>{movie.countTicket}</td>
              <td>{movie.totalPriceTicket}</td>
            </tr>
          ))}
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </>
  );
}
