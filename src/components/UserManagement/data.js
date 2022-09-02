import { Popover, Switch } from "antd";
import MultipointSvg from "../../svgComponents/Multipoint";
import AdminIcon from "../../svgComponents/AdminIcon";

export const columns = (
  userData,
  visible,
  setVisible,
  hide,
  handleVisibleChange
) => [
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
    render: (el) => (
      <span
        style={
          el.userStatus === "online"
            ? { color: "#20C012" }
            : { color: "#86A9C8" }
        }
      >
        {el.userStatus}
      </span>
    ),
  },
  {
    title: "Status",
    render: (el) => (
      <Switch
        onChange={(e) => console.log(e)}
        className="onlineTableSwitch"
        defaultChecked={el.status === "true" ? true : false}
      />
    ),
  },
  {
    title: "",
    render: (_, record) => {
      return (
      <Popover
        content={<span onClick={hide}>Close</span>}
        title="Title"
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <div onClick={() => console.log("User Management")}>
          <MultipointSvg />
        </div>
      </Popover>
    )},
  },
];
