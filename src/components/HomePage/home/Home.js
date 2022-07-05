import React from "react";
import "../../../assets/css/Home.css";
import Category from "./Category";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Category />
          <Category />
          <Category />
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
