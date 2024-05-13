import * as dashBoard from "../../service/dashboard/DashBoard";
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


export default function MovieSaleChart() {
  const [movies, setMovie] = useState();
  const [movieAll, setMovieAll] = useState();
  const [lgShow, setLgShow] = useState(false);
  const [selectedOption] = useState(5);
  const [control, setControl] = useState({
    data: [],
    limit: 5,
    activePage: 1,
    totalElement: 0,
    sortBy: '',
    sortDirection: true,
    filterDate: ''
  });
  const itemsPerPage = control.limit;
  const [currentPage, setCurrentPage] = useState(0);
  const handleChange = async ({ selected }) => {
    setCurrentPage(selected);
  };
  const optionSelect = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 15, label: 15 },
  ];
  const handleChangeOption = (selectedOption) => {
    setControl((prev) => ({
      ...prev,
      limit: selectedOption.value,
    }));
    setCurrentPage(0);
  };
  const listDropDate = [
    {value: 'date', label: 'date'},
    {value: 'month', label: 'month'},
    {value: 'year', label: 'year'},
  ];
  const listDrop = [
    {value: 'movie_id', label: 'Id'},
    {value: 'movieName', label: 'Name'},
    {value: 'totalPriceTicket', label: 'Price'},
  ];
  const handleChangeDropSort = (selectedOption) => {
    setControl((prev) => ({
      ...prev,
      sortBy: selectedOption.value,
    }));
    setCurrentPage(0);
  };
  const handleChangeDropDate = (selectedOption) => {
    setControl((prev) => ({
      ...prev,
      filterDate: selectedOption.value,
    }));
  };
  const handleChangeSort = (e) => {
    setControl((prev) => ({
      ...prev,
      sortDirection: e,
    }));
  };

  useEffect(() => {
    getPaging();
    if (movieAll !== null) {
      getAllFilterDate();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, itemsPerPage,control.sortBy,control.sortDirection,control.filterDate]);
  
  const getPaging = async () => {
    try {
      const temp = await dashBoard.findAllMovieSalePaging(
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
      setMovie(temp.content);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllFilterDate = async () => {
    try {
      const temp = await dashBoard.findAllMovieSaleDate(control.filterDate);
      setMovieAll(temp);
    } catch (err) {
      console.log(err);
    }
  };

  const series = [
    {
      name: "Revenue",
      type: "column",
      data: movieAll?.map((movie) => movie.totalPriceTicket),
    },
    {
      name: "Tickets",
      type: "line",
      data: movieAll?.map((movie) => movie.countTicket),
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
    labels: movieAll?.map((movie) => movie.movieName),
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
      <Dropdown options={listDropDate} onChange={handleChangeDropDate} placeholder="Choose type" />
      <Chart type="line" series={series} options={options} height={350}></Chart>
      <Button onClick={() => setLgShow(true)}>Show all</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" style={{width:'100%',height:'100%'}}>
            Top 100 Movies
            <h5 style={{width: '38%'}}>
          Show <Select defaultValue={selectedOption} onChange={handleChangeOption} options={optionSelect}  placeholder={'5'}/> entries
          </h5>
          </Modal.Title>
          <Button className="btn btn-secondary" onClick={() => handleChangeSort(true)}><img src={Asc} alt="asc"/></Button>
          <Button className="btn btn-secondary" onClick={() => handleChangeSort(false)}><img src={Desc} alt="desc"/></Button>
          <Dropdown options={listDrop} onChange={handleChangeDropSort} placeholder="Sortby" />
          
        </Modal.Header>
        
        <Modal.Body>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Movie</th>
                <th scope="col">Total Tickets</th>
                <th scope="col">Total Revenue</th>
              </tr>
            </thead>
            <tbody>
              {movies?.map((movie, index) => (
                <tr key={movie.id}>
                  <td>{movie.movieName}</td>
                  <td>{movie.countTicket}</td>
                  <td>{movie.totalPriceTicket}</td>
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
