import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Cards from "./components/Cards";
import Table from "./components/Table";
import Search from "./components/Search";
import { useEffect, useState } from "react";

function App() {
  const [Data, setData] = useState({});
  const [searchInput, setSearchInput] = useState("");

  function getData() {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(getData, []);

  return (
    <div className="container-fluid">
      <Header />
      <SubHeader title="Global Data" />
      <Cards global={Data.Global} />
      <SubHeader title="All Countries Data" />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <Table countries={Data.Countries} searchInput={searchInput} />
    </div>
  );
}

export default App;
