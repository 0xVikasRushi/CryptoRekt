import React from "react";
import "../Styles/home.css";
const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="info">
          <h1>
            CryptoRekt <span>Wishlist</span>
          </h1>
          <h4 id="para">Trending CryptoCurrency &#128640;</h4>
          <a href="/trending">
            <button className="btn" onClick={"/trending"}>
              Top 7 Trending &#128176;
            </button>
          </a>
        </div>
        <div className="bg-image">
          <img src="bg.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
