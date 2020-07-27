import React from "react";

const CountryView = (country) => {
  return (
    <>
      <h1>{country.country.name}</h1>
      <p>Capital: {country.country.capital}</p>
      <p>Population: {country.country.population}</p>
      <h3>Languages</h3>
      <ul>{country.country.languages.map((l) => (
        <li>{l.nativeName}</li>
      ))}</ul>
      <br></br>
      <img src={country.country.flag} alt='country flag' width='100px'/>
    </>
  );
};

export default CountryView;
