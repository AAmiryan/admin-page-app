import React from "react";
import AdminIcon from "../../svgComponents/AdminIcon";
import StatisticsCard from "./StatisticsCard/StatisticsCard";
import DashboardTable from "./Table/Table";
import GoogleMap from "../Map/Map";
import { statisticsData } from "./data";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboardHeader">
        <AdminIcon />
        <p>Admin</p>
      </div>
      <div className="nodesCount">
        {statisticsData.map((item) => (
          <StatisticsCard statisticsDataItem={item} key={item.id} />
        ))}
      </div>
      <div className="chartsAnalytic"></div>
      <div className="mapAnalytic">
        <div className="dashboardTable">
          <DashboardTable />
        </div>
        <div>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
