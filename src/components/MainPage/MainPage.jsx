import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";

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

      {/* <Menu /> */}
    </div>
  );
};

export default MainPage;
