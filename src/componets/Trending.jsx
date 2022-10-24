import React, { useState } from "react";
import "./../Styles/trending.css";
import intitaldata from "./intitaldata";
const Trending = () => {
  const API_URL = "https://api.coingecko.com/api/v3/search/trending";
  
  const [trending, setTrending] = useState(intitaldata);

  const fetchdata = async () => {
    const req = await fetch(API_URL);
    const data = await req.json();
    setTrending(data);
  };
  
  return (
    <div className="content">
      <button onClick={fetchdata}>Refresh</button>
      <div className="list">
        <ol>
          {
           trending.coins.map((prev)=> 
           <li>
            <img src={prev.item.small} alt="" />
            {prev.item.name} - {prev.item.symbol}
            </li>
           )
          }
        </ol>
      </div>
    </div>
  );
};

export default Trending;