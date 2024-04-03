import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const HeaderInfos = () => {
  const [headerData, setHeaderData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderData(res.data.data));
  }, []);

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="logo" />
            Watch Tower
          </h1>
        </li>
        <li>
          Crypto Monnaie : {""}
          {headerData.active_cryptocurrencies &&
            headerData.active_cryptocurrencies}
        </li>
        <li>Marchés : {headerData.markets && headerData.markets}</li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">Global Market Cap : <strong></strong></li>
      </ul>
    </div>
  );
};

export default HeaderInfos;
