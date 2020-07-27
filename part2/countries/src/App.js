import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryView from "./components/countryView";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [showCountry, setShowCountry] = useState(false);

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      //console.log(response.data)
      setCountries(response.data);
    });
  }, []);

  let countriesToShow = countries.filter(
    (c) => c.name.toLowerCase().search(filter) !== -1
  );
  //console.log(contriesToShow)
  let render;
  if (countriesToShow.length > 10) {
    render = <p>Too many countries</p>;
  } else if (countriesToShow.length === 1) {
    //render = <p>{countriesToShow[0].name}</p>;
    console.log(countriesToShow[0]);
    render = <CountryView country={countriesToShow[0]} />;
  } else {
    render = countriesToShow.map((c) => (
      <>
        <p key={c.cioc}>{c.name}</p>
        <button onClick = {() => setShowCountry(!showCountry)}>show</button>
        <p>{showCountry}</p>
      </>
    ));
    console.log(showCountry)
  }

  return (
    <div>
      <p>Find Countries</p>
      <input value={filter} onChange={handleFilterChange} />
      <div>{render}</div>
    </div>
  );
}

export default App;
