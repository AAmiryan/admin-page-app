import { Switch } from "antd";
import MultipointSvg from "../../svgComponents/Multipoint";

export const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    country: "Yerevan",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    country: "Yerevan",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    country: "Yerevan",
  },
];

export const columns = (checked) => [
  {
    title: "Imag",
    dataIndex: "image",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "E-mail",
    dataIndex: "age",
  },
  {
    title: "Member Since",
    dataIndex: "address",
  },
  {
    title: "Last Log in",
    dataIndex: "country",
  },
  {
    title: "Graph Numbers",
    dataIndex: "country",
  },
  {
    title: "Current Status",
    dataIndex: "country",
  },
  {
    title: "Status",
    render: () => (
      <Switch
        defaultChecked
        onChange={(e) => console.log(e)}
        className="onlineTableSwitch"
        checked={checked}
      />
    ),
  },
  {
    title: "",
    render: () => (
      <div onClick={() => console.log("User Management")}>
        <MultipointSvg />
      </div>
    ),
  },
];
