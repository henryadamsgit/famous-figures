import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import All from "./pages/All/All";
import Category from "./pages/Category/Category";
import Dead from "./pages/Dead/Dead";
import Alive from "./pages/Alive/Alive";

const App = () => {
  const [showFigures, setShowFigures] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, [location]);

  const fetchData = async () => {
    const currentRoute = location.pathname;

    switch (currentRoute) {
      case "/category/:category":
        await getFiguresByCategory();
        break;
      case "/alive":
        await getAllAlive();
        break;
      case "/dead":
        await getFiguresByDeathDate();
        break;
      default:
        await getAllFigures();
        break;
    }
  };

  const getAllFigures = async () => {
    const url = "http://localhost:8080/all";
    const result = await fetch(url);
    const data = await result.json();
    setShowFigures(data);
  };

  const getFigureById = async (id) => {
    const url = `http://localhost:8080/${id}`;
    const result = await fetch(url);
    const data = await result.json();
    setShowFigures(data);
  };

  const getFiguresByCategory = async (category) => {
    const url = `http://localhost:8080/category/${category}`;
    const result = await fetch(url);
    const data = await result.json();
    setShowFigures(data);
  };

  const getFiguresByDeathDate = async () => {
    const url = "http://localhost:8080/dead";
    const result = await fetch(url);
    const data = await result.json();
    setShowFigures(data);
  };

  const getAllAlive = async () => {
    const url = "http://localhost:8080/alive";
    const result = await fetch(url);
    const data = await result.json();
    setShowFigures(data);
  };

  const updateFigure = async (id, newFigure) => {
    const url = `http://localhost:8080/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFigure),
    });
    if (response.status === 204) {
      const data = await response.json();
      setShowFigures(data);
    } else {
      throw new Error("Failed to update figure");
    }
  };

  const deleteFigureById = async (id) => {
    const url = `http://localhost:8080/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.status === 204) {
      const data = await response.json();
      setShowFigures(data);
    } else {
      throw new Error("Failed to delete figure");
    }
  };

  const createFigure = async (figure) => {
    const url = "http://localhost:8080/figures";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(figure),
    });
    if (response.status === 201) {
      const data = await response.json();

      setShowFigures(data);
    } else {
      throw new Error("Failed to create figure");
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
            showFigures={showFigures}
          />
        }
      />

      <Route
        path="/category"
        element={
          <Category
            showFigures={showFigures}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />
        }
      />
      <Route
        path="/all"
        element={
          <All
            showFigures={showFigures}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />
        }
      />
      <Route
        path="/dead"
        element={
          <Dead
            showFigures={showFigures}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />
        }
      />
      <Route
        path="/alive"
        element={
          <Alive
            showFigures={showFigures}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />
        }
      />
    </Routes>
  );
};

export default App;
