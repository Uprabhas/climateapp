import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { apiURL, Apioption } from "../environment";

const Search = ({ onSearchChange }) => {
  const [search, setsearch] = useState(null);

  const loadOptions = async (inputValue) => {
    return fetch(
      `${apiURL}/cities?namePrefix=${inputValue}`,
      Apioption
    )
    .then((response) => response.json())
    .then((response) => {
      return {
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    });
  };

  const handleonchanges = (searchData) => {
    setsearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
    className="m-4"
      placeholder="search for city"
      debonuceTimeout={600}
      value={search}
      onChange={handleonchanges}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
