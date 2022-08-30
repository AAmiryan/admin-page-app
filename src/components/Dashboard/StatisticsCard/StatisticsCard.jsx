import React from "react";

import "./StatisticsCard.css";

const StatisticsCard = ({statisticsDataItem}) => {
  return (
    <div className="statisticsCardContainer" style={{backgroundColor:statisticsDataItem.color}}>
      <div className="statisticsNumber">{statisticsDataItem.count}</div>
      <div className="statisticsText">{statisticsDataItem.value}</div>
    </div>
  );
};

export default StatisticsCard;
