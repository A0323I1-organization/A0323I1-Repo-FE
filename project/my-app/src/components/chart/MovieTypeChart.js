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

export default function MovieTypeChart() {
  const [lgShow, setLgShow] = useState(false);
  const [movieTypes, setMovieType] = useState();
  const [movieTypeAll, setMovieTypeAll] = useState();
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
  const optionSelect = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 15, label: 15 },
  ];
  const listDrop = [
    {value: 'movieType', label: 'Type Name'},
    {value: 'movieTypeTotalTicket', label: 'Ticket'},
  ];
  const listDropDate = [
    {value: 'date', label: 'date'},
    {value: 'month', label: 'month'},
    {value: 'year', label: 'year'},
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
  const itemsPerPage = control.limit;
  const [currentPage, setCurrentPage] = useState(0);
  const handleChange = async ({ selected }) => {
    setCurrentPage(selected);
  };

  const getPaging = async () => {
    try {
      const temp = await dashBoard.findAllTopMovieTypePaging(
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
      setMovieType(temp.content);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getPaging();
    if (movieTypeAll !== null) {
      getAllFilterDate();   
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },  [currentPage, itemsPerPage,control.sortBy,control.sortDirection,control.filterDate]);
  const getAllFilterDate = async () => {
    try {
      const temp = await dashBoard.findAllTopMovieTypeDate(control.filterDate);
      setMovieTypeAll(temp);
    } catch (err) {
      console.log(err);
    }
  };
  const series = [
    {
      name: "Tickets",
      data: movieTypeAll?.map((movieType) => movieType.movieTypeTotalTicket),
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
        categories: movieTypeAll?.map((movieType) => movieType.movieType),
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
      <Dropdown options={listDropDate} onChange={handleChangeDropDate} placeholder="Choose type" />
      <Chart type="bar" series={series} options={options} width={'90%'}></Chart>
      <Button onClick={() => setLgShow(true)}>Show all</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" style={{width:'110%'}}>
            Top 100 Movie Type
            
          </Modal.Title>
          <h5 style={{width: '60%'}}>
          Show <Select defaultValue={selectedOption} onChange={handleChangeOption} options={optionSelect}  placeholder={itemsPerPage}/> entries
          </h5>
          <Button className="btn btn-secondary" onClick={() => handleChangeSort(true)}><img src={Asc} alt="asc"/></Button>
          <Button className="btn btn-secondary" onClick={() => handleChangeSort(false)}><img src={Desc} alt="desc"/></Button>
          <Dropdown options={listDrop} onChange={handleChangeDrop} placeholder="Sortby" />
            
        </Modal.Header>
        <Modal.Body>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Movie Type</th>
                <th scope="col">Total Tickets</th>
              </tr>
            </thead>
            <tbody>
              {movieTypes?.map((movieType, index) => (
                <tr key={movieType.id}>
                  <td>{movieType.movieType}</td>
                  <td>{movieType.movieTypeTotalTicket}</td>
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
