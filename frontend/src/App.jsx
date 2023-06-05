import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFigures, setFilteredFigures] = useState([]);

  useEffect(() => {
    getFigures(filteredFigures, searchTerm);
  }, [filteredFigures, searchTerm]);

  const getFigures = async () => {
    const url = "http://localhost:8080/figures/all";
    let urlWithEndpoints = url;

    try {
      const response = await fetch(urlWithEndpoints);
      const data = await response.json();
      console.log(data);

      if (searchTerm) {
        const filteredData = data.filter((figure) =>
          figure.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFigures(filteredData);
      } else {
        setFilteredFigures(data);
      }

      // switch (urlWithEndpoints) {
      //   case `${url}/all`:
      //     console.log("All Figures:", data);
      //     break;
      //   case `${url}/{id}`:
      //     console.log("Figure by ID:", data);
      //     break;
      //   case `${url}/random`:
      //     console.log("Random Figure:", data);
      //     break;
      //   default:
      //     break;
      // }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInput = (event) => {
    const allInput = event.target.value.toLowerCase();
    setSearchTerm(allInput);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            handleInput={handleInput}
            searchTerm={searchTerm}
            filteredFigures={filteredFigures}
          />
        }
      />
    </Routes>
  );
};

export default App;
