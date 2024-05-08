import * as dashBoard from "../service/DashBoard";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Chart from "react-apexcharts";
import ReactPaginate from "react-paginate";
import "./Paging.css";
import Select from 'react-select';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Asc from '../../assets/img/asc.svg'
import Desc from '../../assets/img/desc.svg'

export default function ShowTimeChart() {
  const [lgShow, setLgShow] = useState(false);
  const [showTimes, setShowTime] = useState();
  const [showTimeAll, setShowTimeAll] = useState();
  const [selectedOption] = useState(5);
  const [control, setControl] = useState({
    data: [],
    limit: 5,
    activePage: 1,
    totalElement: 0,
    sortBy: '',
    sortDirection: true
  });
  const optionSelect = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 15, label: 15 },
  ];
  const listDrop = [
    {value: 'showTimeDetail', label: 'Time'},
    {value: 'showTimeTotalTicket', label: 'Ticket'},
  ];
  const handleChangeOption = (selectedOption) => {
    setControl((prev) => ({
      ...prev,
      limit: selectedOption.value,
    }));
    setCurrentPage(0);
  };
  const handleChangeDrop = (selectedOption) => {
    setControl((prev) => ({
      ...prev,
      sortBy: selectedOption.value,
    }));
    setCurrentPage(0);
  };
  const handleChangeSort = (e) => {
    setControl((prev) => ({
      ...prev,
      sortDirection: e,
    }));
  };
  const itemsPerPage = control.limit;
  const [currentPage, setCurrentPage] = useState(0);
  const handleChange = async ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    getPaging();
    if (showTimeAll !== null) {
      getAll();
    }
    // eslint-disable-next-line
  }, [currentPage, itemsPerPage,control.sortBy,control.sortDirection]);

  const getPaging = async () => {
    try {
      const temp = await dashBoard.findAllTopShowTimePaging(
        currentPage,
        itemsPerPage,
        control.sortBy,
        control.sortDirection
      );
      setControl((prev) => ({
        ...prev,
        data: temp.content,
        totalElement: temp.totalElements,
      }));
      setShowTime(temp.content);
    } catch (err) {
      console.log(err);
    }
  };

  const getAll = async () => {
    try {
      const temp = await dashBoard.findAllTopShowTimePaging(0, 100, "","");
      setShowTimeAll(temp.content);
    } catch (err) {
      console.log(err);
    }
  };
  const series = [
    {
      name: "Tickets",
      data: showTimeAll?.map((showTime) => showTime.showTimeTotalTicket),
    },
  ];
  const options = {
    labels: showTimeAll?.map((showTime) => showTime.showTimeDetail),
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
          <h5 style={{width: '12%'}}>
          Show <Select defaultValue={selectedOption} onChange={handleChangeOption} options={optionSelect}  placeholder={itemsPerPage}/> entries
          </h5>
          <Button className="btn btn-secondary" onClick={() => handleChangeSort(true)}><img src={Asc} alt="asc"/></Button>
          <Button className="btn btn-secondary" onClick={() => handleChangeSort(false)}><img src={Desc} alt="desc"/></Button>
          <Dropdown options={listDrop} onChange={handleChangeDrop} placeholder="Sortby" />
          
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Total Tickets</th>
              </tr>
            </thead>
            <tbody>
              {showTimes?.map((showTime) => (
                <tr key={showTime.id}>
                  <td>{showTime.showTimeDetail}</td>
                  <td>{showTime.showTimeTotalTicket}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"Previous "}
            nextLabel={" Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(control.totalElement / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handleChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
