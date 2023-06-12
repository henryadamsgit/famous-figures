import React, { useState } from "react";
import "./CreateFigure.scss";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import TopNav from "../../components/TopNav/TopNav";

const CreateFigure = ({ createFigure }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [dob, setDob] = useState("");
  const [dod, setDod] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const figureData = {
      name,
      category,
      dob,
      dod,
      image_url: imageUrl,
      bio,
    };
    createFigure(figureData);
    alert("Figure Added!");
  };

  return (
    <>
      <TopNav />
      <SideNav />
      <div className="layout">
        <section className="newFigure">
          <h2>Create Your Own Favorite Figure!</h2>

          <form className="newFigure__form" onSubmit={handleSubmit}>
            <div className="newFigure__form-group">
              <label htmlFor="name">NAME:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="newFigure__form-group">
              <label htmlFor="category">CATEGORY:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </div>

            <div className="newFigure__form-group">
              <label htmlFor="dob">DOB:</label>
              <input
                type="text"
                id="dob"
                name="dob"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
              />
            </div>

            <div className="newFigure__form-group">
              <label htmlFor="dod">DOD:</label>
              <input
                type="text"
                id="dod"
                name="dod"
                value={dod}
                onChange={(event) => setDod(event.target.value)}
              />
            </div>

            <div className="newFigure__form-group">
              <label htmlFor="img_url">IMAGE_URL:</label>
              <input
                type="text"
                id="url"
                name="image_url"
                value={imageUrl}
                onChange={(event) => setImageUrl(event.target.value)}
              />
            </div>

            <div className="newFigure__form-group">
              <label htmlFor="bio">BIO:</label>
              <textarea
                id="bio"
                name="bio"
                value={bio}
                onChange={(event) => setBio(event.target.value)}
              ></textarea>
            </div>

            <div className="newFigure__form-buttons">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
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
