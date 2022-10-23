import React from "react";
import "../Styles/home.css";
const Home = () => {
  return (
    <>
      {/* <header>
        <div className="main-header">
          <img src="Play.svg" alt="logo" id="logo" />
          <a href="/">Trending</a>
          <a href="/">Crypto News </a>
          <a href="/">My Wishlist</a>
          <a href="/">Github</a>
        </div>
        <div className="header-btn">
          <a href="/">Login</a>
          <button id="signup">Sign Up</button>
        </div>
      </header> */}
      <div className="wrapper">
        <div className="info">
          <h1>
            Information About <br /> <span>CryptoCurrency</span>
          </h1>
          <p id="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sit
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="bg-image">
          <img src="bg.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
