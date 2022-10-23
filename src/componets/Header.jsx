import React from "react";
import "./../Styles/home.css";
const Header = () => {
  return (
    <header>
      <div className="main-header">
        <img src="Play.svg" alt="logo" id="logo" onTouchMove="/" />
        <a href="/">Home</a>
        <a href="/trending">Trending</a>
        <a href="/mywishlist">My Wishlist</a>
        <a href="https://github.com/0xvikasrushi">Github</a>
      </div>
      <div className="header-btn">
        <a href="/">Login</a>
        <button id="signup">Sign Up</button>
      </div>
    </header>
  );
};
export default Header;
