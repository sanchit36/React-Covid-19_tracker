import React from "react";
import { numberWithCommas } from "../utility";

function Table({ countries, searchInput }) {
  const c = countries ? countries : [];
  let cf = c.filter((country) =>
    country.Country.toLowerCase().includes(searchInput)
  );
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col">Sno.</th>
            <th scope="col">Country</th>
            <th scope="col">New Confirmed</th>
            <th scope="col">Total Confirmed</th>
            <th scope="col">New Deaths</th>
            <th scope="col">Total Deaths</th>
            <th scope="col">New Recovered</th>
            <th scope="col">Total Recovered</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {cf.map((obj, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{obj.Country}</td>
              <td>{numberWithCommas(obj.NewConfirmed)}</td>
              <td>{numberWithCommas(obj.TotalConfirmed)}</td>
              <td>{numberWithCommas(obj.NewDeaths)}</td>
              <td>{numberWithCommas(obj.TotalDeaths)}</td>
              <td>{numberWithCommas(obj.NewRecovered)}</td>
              <td>{numberWithCommas(obj.TotalRecovered)}</td>
              <td>{obj.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
