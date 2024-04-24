import "../dasboard/Dasboard.css";
import MovieSale from "../chart/MovieSaleChart";
import React from "react";

export default function ManagerTicket() {
  return (
    <>
      <main>
        <h1>MOVIE ANALYTICS DASHBOARD</h1>
        <button>Show more</button>
        <div className="container">
          <div class="row">
              <MovieSale />
              
          </div>
        </div>
      </main>
    </>
  );
}
