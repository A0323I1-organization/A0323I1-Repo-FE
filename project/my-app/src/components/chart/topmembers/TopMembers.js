import React, { useState, useEffect } from "react";
import "./TopMembers.css";
import * as dashBoard from "../../service/DashBoard";
import ReactPaginate from "react-paginate";
import "../Paging.css";
import Select from 'react-select';

export default function TopMembers() {
  const [customers, setCustomer] = useState();
  const [selectedOption] = useState(5);
  const [control, setControl] = useState({
    data: [],
    limit: 5,
    activePage: 1,
    totalElement: 0
  });
  const optionSelect = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 15, label: 15 },
  ];
  const itemsPerPage = control.limit;
  const [currentPage, setCurrentPage] = useState(0);
  const handleChange = async ({ selected }) => {
    setCurrentPage(selected);
  };
  const handleChangeOption = (selectedOption) => {
    setControl((prev) => ({
      ...prev,
      limit: selectedOption.value,
    }));
    setCurrentPage(0);
  };

  useEffect(() => {
    getPaging();
  }, [currentPage, itemsPerPage]);
  const getPaging = async () => {
    try {
      const temp = await dashBoard.findAllTopCustomerPaging(
        currentPage,
        itemsPerPage,
        "",
        ""
      );
      setControl((prev) => ({
        ...prev,
        data: temp.content,
        totalElement: temp.totalElements,
      }));
      setCustomer(temp.content);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-header">Leaderboard</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="overflow-table">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Top</th>
                    <th scope="col">Member</th>
                    <th scope="col">Total Tickets</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Point</th>
                  </tr>
                </thead>
                <tbody>
                  {customers?.map((customer, index) => (
                    <tr key={customer.customerId}>
                      <td>{index+1}</td>
                      <td>{customer.customerName}</td>
                      <td>{customer.customerTotalTicket}</td>
                      <td>{customer.customerTotalPrice}</td>
                      <td>{customer.point}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{width:'25%'}}>
              Show <Select defaultValue={selectedOption} onChange={handleChangeOption} options={optionSelect}  placeholder={'5'} /> entries
              </p>
              <div>
          
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
          </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
