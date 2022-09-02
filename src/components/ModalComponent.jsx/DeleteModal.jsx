import { Button, Modal } from "antd";
import React from "react";

import "./DeleteModal.css";

const DeleteModal = ({ isModalVisible, setIsModalVisible }) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Are you sure?"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="information">
          <p>
            All information associated with this user will be permanently
            deleted
          </p>
        </div>
        <div className="buttons">
          <Button className="cancelButton" shape="round" size="large">
            Cancel
          </Button>
          <Button
            className="deleteButton"
            shape="round"
            size="large"
            type="primary"
          >
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteModal;
