import React from "react";
import Filters from "../Filters/Filters";
import TableComponent from "../Table/Table";
import AdminIcon from "../../svgComponents/AdminIcon";

import "./GraphDirectory.css";

const GraphDirectory = () => {
  return (
    <div className="graphDirectoryContainer">
      <div className="graphDirectory">
        <div>
          <Filters />
        </div>
        

        <div className="adminIcon">
          <AdminIcon />
          <p>Admin</p>
        </div>
      </div>
      <div className="graphDirectoryTable">
        <TableComponent />
      </div>
    </div>
  );
};

export default GraphDirectory;
