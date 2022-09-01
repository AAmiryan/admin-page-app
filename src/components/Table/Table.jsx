import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Table.css";
import { Switch, Table } from "antd";
import MultipointSvg from "../../svgComponents/Multipoint";

const TableComponent = ({ data, columns }) => {
  const [online, setOnline] = useState(true);

  // const columns = [
  //   {
  //     title: "Imag",
  //     dataIndex: "image",
  //   },
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //   },
  //   {
  //     title: "E-mail",
  //     dataIndex: "age",
  //   },
  //   {
  //     title: "Member Since",
  //     dataIndex: "address",
  //   },
  //   {
  //     title: "Last Log in",
  //     dataIndex: "country",
  //   },
  //   {
  //     title: "Graph Numbers",
  //     dataIndex: "country",
  //   },
  //   {
  //     title: "Current Status",
  //     dataIndex: "country",
  //   },
  //   {
  //     title: "Status",
  //     render: () => (
  //       <Switch
  //         defaultChecked
  //         onChange={(e) => console.log(e)}
  //         className="onlineTableSwitch"
  //       />
  //     ),
  //   },
  //   {
  //     title: "",
  //     render: () => (
  //       <div onClick={() => console.log("asfac")}>
  //         <MultipointSvg />
  //       </div>
  //     ),
  //   },
  // ];

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
