import React from "react";
import { Button, Input, Modal } from "antd";


import "./Modal.css";

const ModalComponent = ({ isModalVisible, setIsModalVisible }) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Add User"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="inputNameSurname">
          <div>
            <Input placeholder="First name" />
          </div>
          <div>
            <Input placeholder="Last name" />
          </div>
        </div>
        <div className="inputEmail">
          <Input placeholder="Email" />
        </div>
        <div>
          <Button type="primary" shape="round" size="large">
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
