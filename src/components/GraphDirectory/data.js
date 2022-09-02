import AdminIcon from "../../svgComponents/AdminIcon";
import MultipointSvg from "../../svgComponents/Multipoint";

import "./GraphDirectory.css"

export const columns = [
  {
    title: "Name",
    render: (el) => (
      <div className="name">
        <div><AdminIcon /></div>
        <div>{el.graphName}</div>
      </div>
    ),
  },
  {
    title: "Nodes number",
    dataIndex: "nodesCount",
  },
  {
    title: "Links number",
    dataIndex: "linksCount",
  },
  {
    title: "Created by",
    dataIndex: "creator",
  },
  {
    title: "Shared with",
    dataIndex: "sharesCount",
  },
  {
    title: "Number of attachment",
    dataIndex: "attachmentNumber",
  },
  {
    title: "",
    render: () => (
      <div onClick={() => console.log("Graph directory")}>
        <MultipointSvg />
      </div>
    ),
  },
];
