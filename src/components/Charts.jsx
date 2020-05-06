import React from "react";
import Chart from "./Chart";


//functional component Charts that is being passed coinData props from index.js
const Charts = ({ coinData }) => {

  
  return (
    <div className="charts">
      {/* we are mapping through coinData which has been passed down through props. For each coin in coinData, we will return a container that will have a unique key which is the coin's name. The container will use the title, symbol, logo, and return a Chart component that is being imported*/}
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          {/* the Chart component is being passed sparlineData props */}
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
