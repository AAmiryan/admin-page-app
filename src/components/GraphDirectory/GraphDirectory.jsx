import React, { useState } from "react";
import Filters from "../Filters/Filters";
import TableComponent from "../Table/Table";
import AdminIcon from "../../svgComponents/AdminIcon";
import { columns } from "./data";
import { useFetch } from "../../hooks/useFetch";

import "./GraphDirectory.css";

const GraphDirectory = () => {
  const [graphData, setGraphData] = useState({
    isLoading: false,
    data: null,
    onError: null,
  });

  const { data } = useFetch("/graph.json", graphData, setGraphData);

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
        <TableComponent data={data} columns={columns} />
      </div>
    </div>
  );
};

export default GraphDirectory;
