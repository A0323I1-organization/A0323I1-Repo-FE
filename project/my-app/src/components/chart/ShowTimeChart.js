import * as dashBoard from "../service/DashBoard";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Chart from "react-apexcharts";

export default function ShowTimeChart() {
  const [lgShow, setLgShow] = useState(false);
  const [showTimes, setShowTime] = useState();
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      const temp = await dashBoard.findAllTopShowTime();
      setShowTime(temp);
    } catch (err) {
      console.log(err);
    }
  };
  const series = [
    {
      name: "Tickets",
      data: showTimes?.map((showTime) => showTime.showTimeTotalTicket),
    },
  ];
  const options = {
    labels: showTimes?.map((showTime) => showTime.showTimeDetail),
      xaxis: {
        type: "time",
      },
      yaxis: {
        title: {
          text: 'Tickets',
        },
      },
  }
  return (
    <>
      <Chart type="line" series={series} options={options} width={'90%'} ></Chart>
      <Button onClick={() => setLgShow(true)}>Show all</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Top Show Time
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Time</th>
                <th scope="col">Total Tickets</th>
              </tr>
            </thead>
            <tbody>
              {showTimes?.map((showTime, index) => (
                <tr key={showTime.id}>
                  <td>{index}</td>
                  <td>{showTime.showTimeDetail}</td>
                  <td>{showTime.showTimeTotalTicket}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </>
  );
}
