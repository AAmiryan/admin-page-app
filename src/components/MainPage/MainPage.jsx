import React from "react";
import "./MainPage.css";
import Dashboard from "../Dashboard/Dashboard";
import GraphAnalytics from "../GraphAnalytics/GraphAnalytics";
import GraphDirectory from "../GraphDirectory/GraphDirectory";
import UserManagement from "../UserManagement/UserManagement";
import { Routes, Route, Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="mainContainer">
      <div className="menuBlock">
        <p className="adminPage">Admin page</p>
        <Link to="/" className="link">
          Dashboard
        </Link>
        <Link to="/user-management">UserManagement</Link>
        <Link to="/graph-directory">GraphDirectory</Link>
        <Link to="/graph-analytics">GraphAnalytics</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/graph-directory" element={<GraphDirectory />} />
          <Route path="/graph-analytics" element={<GraphAnalytics />} />
        </Routes>
      </div>

      {/* <Menu /> */}
    </div>
  );
};

export default MainPage;
