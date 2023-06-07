import React from "react";
import "./CreateFigure.scss";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import TopNav from "../../components/TopNav/TopNav";

const CreateFigure = () => {
  return (
    <>
      <TopNav />
      <SideNav />
      <div className="layout">
        <section className="newFigure">
          <h2>Create Your Own Favourite Figure!</h2>

          <form className="newFigure__form">
            <div className="newFigure__form-group">
              <label htmlFor="name">NAME:</label>
              <input type="text" id="name" name="name" />
            </div>

            <div className="newFigure__form-group">
              <label htmlFor="category">CATEGORY:</label>
              <input type="text" id="category" name="category" />
            </div>

            <div className="newFigure__form-group">
              <label htmlFor="dob">DOB:</label>
              <input type="text" id="dob" name="dob" />
            </div>

            <div className="newFigure__form-group">
              <label htmlFor="dod">DOD:</label>
              <input type="text" id="dod" name="dod" />
            </div>

            <div className="newFigure__form-group">
              <label htmlFor="img_url">IMAGE_URL:</label>
              <input type="text" id="url" name="image_url" />
            </div>

            <div className="newFigure__form-group">
              <label htmlFor="bio">BIO:</label>
              <textarea id="bio" name="bio"></textarea>
            </div>

            <div className="newFigure__form-buttons">
              <button type="submit">Submit</button>
              <button type="button">Cancel</button>
            </div>
          </form>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default CreateFigure;
