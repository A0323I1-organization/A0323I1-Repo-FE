import * as dashBoard from "../service/DashBoard";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Chart from "react-apexcharts";

export default function MovieTypeChart() {
  const [lgShow, setLgShow] = useState(false);
  const [movieTypes, setMovieType] = useState();
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      const temp = await dashBoard.findAllTopMovieType();
      setMovieType(temp);
    } catch (err) {
      console.log(err);
    }
  };
  const series = [
    {
      name: "Tickets",
      data: movieTypes?.map((movieType) => movieType.movieTypeTotalTicket),
    },
  ];
  const options = {
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '50%',
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0
      },
      grid: {
        row: {
          colors: ['#fff', '#f2f2f2']
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: movieTypes?.map((movieType) => movieType.movieType),
        tickPlacement: 'on'
      },
      yaxis: {
        title: {
          text: 'Tickets',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        },
      }
  }
  return (
    <>
      <Chart type="bar" series={series} options={options} width={'90%'}></Chart>
      <Button onClick={() => setLgShow(true)}>Show all</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Top 100 Movie Type
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Movie Type</th>
                <th scope="col">Total Tickets</th>
              </tr>
            </thead>
            <tbody>
              {movieTypes?.map((movieType, index) => (
                <tr key={movieType.id}>
                  <td>{index}</td>
                  <td>{movieType.movieType}</td>
                  <td>{movieType.movieTypeTotalTicket}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </>
  );
}
