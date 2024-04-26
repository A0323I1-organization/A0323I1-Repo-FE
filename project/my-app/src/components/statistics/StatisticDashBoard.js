import "../dasboard/Dasboard.css";
import MovieSale from "../chart/MovieSaleChart";
import React from "react";
import MovieTypeChart from "../chart/MovieTypeChart";
import ShowTimeChart from "../chart/ShowTimeChart";
import TopMembers from "../chart/topmembers/TopMembers";

export default function ManagerTicket() {
  const comStyle = {
    width: "100%",
    height: "500px",
  };
  return (
    <>
      <main>
        <h1>MOVIE ANALYTICS DASHBOARD</h1>
        <hr></hr>
        <div className="container">
          <div class="row" style={comStyle}>
            <div class="col">
            <h1>Top movie</h1>
            <MovieSale />
            </div>
          </div>
          <br></br>
          <div class="row" style={comStyle}>
            <div class="col">
              <h2>Top Movie Type</h2>
              <MovieTypeChart />
            </div>
            <div class="col">
            <h2>Top Show Time</h2>
              <ShowTimeChart />
            </div>
          </div>
          <div class="row" style={comStyle}>
            <TopMembers />
          </div>
        </div>
      </main>
    </>
  );
}
