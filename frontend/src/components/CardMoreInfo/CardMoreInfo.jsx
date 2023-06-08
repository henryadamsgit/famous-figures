import React from "react";
import "./CardMoreInfo.scss";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import TopNav from "../../components/TopNav/TopNav";
import { useParams } from "react-router-dom";
import HomeButton from "../HomeButton/HomeButton";

const CardMoreInfo = ({ showFigures }) => {
  const { name } = useParams();
  const figure = showFigures.find((figure) => figure.name === name);
  return (
    <div className="layout">
      <TopNav />
      <SideNav />
      <div className="container">
        <section className="moreInfo">
          {figure && (
            <>
              <h2 className="moreInfo__name">{figure.name}</h2>
              <img
                className="moreInfo__img"
                src={figure.image_url}
                alt="figure-img"
              />
              <p className="moreInfo__bio">Biography: {figure.biography}</p>
              <HomeButton className="moreInfo__return">Return</HomeButton>
              <div class="moreInfo__buttons">
                <button class="moreInfo__update">Update</button>
                <button class="moreInfo__delete">Delete</button>
              </div>
            </>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CardMoreInfo;
