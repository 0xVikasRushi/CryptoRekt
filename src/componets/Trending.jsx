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
      <div className="main">
        <button id="reload-btn" onClick={fetchdata}>
          Refresh
        </button>
        <div className="list">
          <table id="table">
            <thead>
              <tr>
                <th>Logo</th>
                <th>Name </th>
                <th>Symbol</th>
                <th>Marketcap Rank</th>
              </tr>
            </thead>

            {trending.coins.map((prev) => (
              <tr>
                <td>
                  <img
                    src={prev.item.large}
                    width="90px"
                    height="90px"
                    className="img"
                    alt={prev.id}
                  />
                </td>
                <td>{prev.item.name}</td>
                <td>{prev.item.symbol}</td>
                <td id={prev.item.market_cap_rank < 100 ? "tgreen" : "tred"}>
                  #{prev.item.market_cap_rank}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trending;
