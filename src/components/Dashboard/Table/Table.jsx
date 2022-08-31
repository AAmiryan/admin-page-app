import React from "react";
import { Table } from "antd";

import "./Table.css";

const DashboardTable = () => {
  const columns = [
    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "Percent",
      dataIndex: "percent",
    },
  ];
  const data = [
    {
      key: "1",
      country: "Yerevan, Armenia",
      percent: "20%",
    },
    {
      key: "2",
      country: "Yerevan, Armenia",
      percent: "20%",
    },
    {
      key: "3",
      country: "Yerevan, Armenia",
      percent: "20%",
    },
    {
      key: "4",
      country: "Yerevan, Armenia",
      percent: "20%",
    },
    {
      key: "5",
      country: "Yerevan, Armenia",
      percent: "20%",
    },
    
  ];
  return (
    <div>
      <div className="tableTitle">Visits by Location</div>
      <div>
        <Table
          className={data.length <= 5 ? "table" : "tableScroll"}
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
