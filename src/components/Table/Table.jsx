import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Table.css";
import { Table } from "antd";

const TableComponent = ({ data, columns }) => {
  const [online, setOnline] = useState(true);

  return (
    <Table
      className="tableComponent"
      columns={columns}
      dataSource={data}
      size="middle"
    />
  );
};

export default TableComponent;
