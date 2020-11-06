import React from "react";
import { numberWithCommas } from "../utility";

function Card({ keyName, value, index }) {
  return (
    <div
      className={
        index <= 1
          ? "card col-md-5 mx-auto text-white bg-info mb-3"
          : index <= 3
          ? "card col-md-5 mx-auto text-white bg-danger mb-3"
          : "card col-md-5 mx-auto text-white bg-success mb-3"
      }
    >
      <div className="card-body">
        <h2 className="card-title font-weight-bold">
          {numberWithCommas(value)}
        </h2>
        <h5 className="card-text">{keyName}</h5>
      </div>
    </div>
  );
}

export default Card;
