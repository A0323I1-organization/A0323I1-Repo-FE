import React, { useState, useEffect } from "react";
import "./TopMembers.css";
import * as dashBoard from "../../service/DashBoard";

export default function TopMembers() {
  const [customers, setCustomer] = useState();
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      const temp = await dashBoard.findAllTopCustomer();
      setCustomer(temp);
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
                    <th scope="col">#</th>
                    <th scope="col">Member</th>
                    <th scope="col">Total Tickets</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Point</th>
                  </tr>
                </thead>
                <tbody>
                  {customers?.map((customer, index) => (
                    <tr key={customer.customerId}>
                      <td>{index}</td>
                      <td>{customer.customerName}</td>
                      <td>{customer.customerTotalTicket}</td>
                      <td>{customer.customerTotalPrice}</td>
                      <td>{customer.point}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
