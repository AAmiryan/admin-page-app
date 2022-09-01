import { Switch } from "antd";
import MultipointSvg from "../../svgComponents/Multipoint";
import AdminIcon from "../../svgComponents/AdminIcon";

export const columns = (checked) => [
  {
    title: "Imag",
    render: () => <AdminIcon />,
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "E-mail",
    dataIndex: "email",
  },
  {
    title: "Member Since",
    dataIndex: "member",
  },
  {
    title: "Last Log in",
    dataIndex: "lastLogin",
  },
  {
    title: "Graph Numbers",
    dataIndex: "graphsCount",
  },
  {
    title: "Current Status",
    dataIndex: "userStatus",
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
