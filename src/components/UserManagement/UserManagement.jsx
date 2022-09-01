import { Button } from "antd";
import React from "react";
import AdminIcon from "../../svgComponents/AdminIcon";
import TableComponent from "../Table/Table";
import Filters from "../Filters/Filters";
import { data, columns } from "./data";

import "./UserManagement.css";

const UserManagement = () => {
  return (
    <div className="userManagementContainer">
      <div className="managementHeader">
        <Button type="primary" shape="round" size="large">
          Add Users
        </Button>
        <Button type="primary" shape="round" size="large" className="exportButton">
          Export CSV
        </Button>
        <div className="adminIcon">
          <AdminIcon />
          <p>Admin</p>
        </div>
      </div>
      <div className="managementFilter">
        <Filters />
      </div>
      <div className="managementTable">
        <TableComponent data={data} columns={columns(true)} />
      </div>
    </div>
  );
};

export default UserManagement;
