import { Button } from "antd";
import React, { useState } from "react";
import AdminIcon from "../../svgComponents/AdminIcon";
import TableComponent from "../Table/Table";
import Filters from "../Filters/Filters";
import { columns } from "./data";
import { useFetch } from "../../hooks/useFetch";
import ModalComponent from "../ModalComponent.jsx/Modal";
import DeleteModal from "../ModalComponent.jsx/DeleteModal";

import "./UserManagement.css";

const UserManagement = () => {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const { data } = useFetch("/user.json");

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="userManagementContainer">
      <div className="managementHeader">
        <Button type="primary" shape="round" size="large" onClick={handleOpenModal}>
          Add Users
        </Button>
        <Button
          type="primary"
          shape="round"
          size="large"
          className="exportButton"
        >
          Export CSV
        </Button>
        <div className="adminIcon">
          <AdminIcon />
          <p>Admin</p>
        </div>
      </div>
      <div className="managementFilter">
        <Filters />
      </div>
      <div className="managementTable">
        <TableComponent
          data={data}
          columns={columns(
            data,
            visible,
            setVisible,
            hide,
            handleVisibleChange
          )}
        />
      </div>
      <ModalComponent isModalVisible = {isModalVisible} setIsModalVisible = {setIsModalVisible} />
      <DeleteModal isModalVisible={isDeleteModalVisible} setIsModalVisible={setIsDeleteModalVisible}/>
    </div>
  );
};

export default UserManagement;
