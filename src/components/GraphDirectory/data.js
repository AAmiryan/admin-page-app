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

  export const columns = [
    {
      title: "Imag",
      dataIndex: "image",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Nodes number",
      dataIndex: "age",
    },
    {
      title: "Links number",
      dataIndex: "address",
    },
    {
      title: "Created by",
      dataIndex: "country",
    },
    {
      title: "Shared with",
      dataIndex: "country",
    },
    {
      title: "Number of attachment",
      dataIndex: "country",
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
  