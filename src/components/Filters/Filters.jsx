import { AutoComplete, Button, Input, Select } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchSvg from "../../svgComponents/Search";

import "./Filters.css";

const { Option } = Select;

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const Filters = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  let path = window.location.pathname;

  const onSearch = (searchText) => {
    console.log("on search");
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  const onChange = (data) => {
    console.log("change");
    setValue(data);
  };

  const handleSelectChange = (e) => {
    console.log("handleSelectChange", e);
  };

  const handleNodesSearch = () => {
    console.log("handleNodesSearch");
  }


  return (
    <div className="filterContainer">
      <div>
        <AutoComplete
          value={value}
          options={options}
          style={{
            width: 300,
          }}
          onSelect={onSelect}
          onSearch={onSearch}
          onChange={onChange}
          dropdownClassName="filtersAutocomplete"
          placeholder="Search"
          className="filtersAutoComplete"
        />
      </div>
      {path === "/user-management" ? (
        <>
          <div>
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              onChange={handleSelectChange}
              className="filtersSelect"
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div>
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              onChange={handleSelectChange}
              className="filtersSelect"
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </>
      ) : (
        <>
          <div>
            <Input placeholder="Created by" bordered={false} />
          </div>
          <div>
            <Input
              onChange={handleNodesSearch}
              placeholder="Nodes number"
              maxLength={25}
              bordered={false}
              type="number"
            />
          </div>
        </>
      )}
      <div>
        <Button type="text">Reset</Button>
      </div>
    </div>
  );
};

export default Filters;
