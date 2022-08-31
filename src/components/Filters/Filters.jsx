import { AutoComplete, Button, Select } from "antd";
import React, { useState } from "react";
import SearchSvg from "../../svgComponents/Search";

import "./Filters.css"

const { Option } = Select;

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const Filters = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

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
      <div>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleSelectChange}
          className="selectAutoComplete"
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
          className="selectAutoComplete"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled">Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
      <div>
        <Button type="text">Reset</Button>
      </div>
    </div>
  );
};

export default Filters;
