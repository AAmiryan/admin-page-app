import React from "react";
import { Table } from "antd";

import "./Table.css"

const DashboardTable = () => {
    const columns = [
        {
          title: "Name",
          dataIndex: "name"
        },
        {
          title: "Age",
          dataIndex: "age"
        },
       
      ];
      const data = [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park"
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park"
        },
      ];
  return (
    <div>
      <div className="tableTitle">Visits by Location</div>
      <div>
      <Table
      columns={columns}
      dataSource={data}
      size="middle"
      showHeader={false}
      pagination={false}
    />
      </div>
    </div>
  );
};

export default DashboardTable;
