import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

const HomePage = ({
  handleInput,
  showFigures,
  searchTerm,
  firstName,
  lastName,
}) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (firstName && lastName) {
      setMessage(
        `Welcome, ${firstName} ${lastName}! You have entered Famous Figures!.`
      );
    }
  }, [firstName, lastName]);

  return (
    <div className="layout">
      <TopNav />
      <SideNav />
      <div className="container">
        <SearchBar
          label="Search for your favourite Famous Figure!"
          handleInput={handleInput}
        />
        {message && <p>{message}</p>}
        <ScrollButton />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
