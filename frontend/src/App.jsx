import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import All from "./pages/All/All";
import Category from "./pages/Category/Category";
import Dead from "./pages/Dead/Dead";
import Alive from "./pages/Alive/Alive";
import CardMoreInfo from "./components/CardMoreInfo/CardMoreInfo";
import CreateFigure from "./pages/CreateFigure/CreateFigure";
import CategorySport from "./pages/CategorySport/CategorySport";
import CategoryLiterature from "./pages/CategoryLiterature/CategoryLiterature";
import CategoryScience from "./pages/CategoryScience/CategoryScience";
import CategoryPolitics from "./pages/CategoryPolitics/CategoryPolitics";
import CategoryMusic from "./pages/CategoryMusic/CategoryMusic";

const App = () => {
  const [showFigures, setShowFigures] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();

  
  useEffect(() => {
    fetchData();
  }, [location]);

  const fetchData = async () => {
    const currentRoute = location.pathname;

    switch (currentRoute) {
      case "/category/sport":
        await getFiguresByCategory("Sports");
        break;
      case "/category/literature":
        await getFiguresByCategory("Literature");
        break;
      case "/category/science":
        await getFiguresByCategory("Science");
        break;
      case "/category/politics":
        await getFiguresByCategory("Politics");
        break;
      case "/category/music":
        await getFiguresByCategory("Music");
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

  const getFiguresByCategory = async (category) => {
    console.log("is getting here");
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

  const getFigureById = async (id) => {
    const url = `http://localhost:8080/${id}`;
    const result = await fetch(url);
    const data = await result.json();
    setShowFigures(data);
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
        path="/category/:category"
        element={
          <Category
            showFigures={showFigures}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />
        }
      />

      <Route
        path="/category/sport"
        element={
          <CategorySport
            showFigures={showFigures}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />
        }
      />
      <Route
        path="/category/literature"
        element={
          <CategoryLiterature
            showFigures={showFigures}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />
        }
      />
      <Route
        path="/category/science"
        element={
          <CategoryScience
            showFigures={showFigures}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />
        }
      />
      <Route
        path="/category/politics"
        element={
          <CategoryPolitics
            showFigures={showFigures}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />
        }
      />

      <Route
        path="/category/music"
        element={
          <CategoryMusic
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
      <Route
        path="/figure/:name"
        element={<CardMoreInfo showFigures={showFigures} />}
      />

      <Route
        path="/customise"
        element={<CreateFigure createFigure={createFigure} />}
      />
    </Routes>
  );
};

export default App;
