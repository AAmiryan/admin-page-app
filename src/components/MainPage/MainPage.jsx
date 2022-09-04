import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="mainContainer">
      <div className="menuBlock">
        <div className="adminPageContainer">
          <p className="adminPage">Admin page</p>
        </div>
        <Link to="/" className="link">
          Dashboard
        </Link>
        <Link to="/user-management">UserManagement</Link>
        <Link to="/graph-directory">GraphDirectory</Link>
        <Link to="/graph-analytics">GraphAnalytics</Link>
      </div>
    </div>
  );
};

export default MainPage;
