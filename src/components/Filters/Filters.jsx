import { AutoComplete, Button, Input, Select } from "antd";
import React, { useState } from "react";
import SearchSvg from "../../svgComponents/Search";

import "./Filters.css";

const { Option } = Select;

const Filters = ({ tableData, setTableData, data }) => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const [filteredTableData, setFilteredTableData] = useState([]);

  let path = window.location.pathname;

  const onAutoCompleteSearch = (searchText) => {
    const filteredData = data?.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredTableData(filteredData);
    const optionsText = filteredData?.map((option) => ({
      value: option.name.toLowerCase(),
      key: option.id,
    }));
    setOptions(optionsText);
    if (searchText.length === 0) {
      setTableData({ isLoading: false, data: data, onError: null });
    }
  };

  const onAutoCompleteSelect = () => {
    setTableData({ isLoading: false, data: filteredTableData, onError: null });
  };

  const onAutoCompleteChange = (searchValue) => {
    setValue(searchValue);
    // const filteredData = data?.filter((item) => {
    //   return item.name.toLowerCase().includes(value.toLowerCase());
    // });

    // setFilteredTableData(filteredData);
    // const optionsText = filteredData?.map((option) => ({
    //   value: option.name.toLowerCase(),
    //   key: option.id,
    // }));
    // setOptions(optionsText);
    // console.log("optionsText", optionsText);
    // console.log("filteredData", filteredData);
  };

  const handleSelectChange = (e) => {
    console.log("handleSelectChange", e);
  };

  const handleNodesSearch = () => {
    console.log("handleNodesSearch");
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
          onSelect={onAutoCompleteSelect}
          onSearch={onAutoCompleteSearch}
          onChange={onAutoCompleteChange}
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
