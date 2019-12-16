import { useState, useReducer } from "react";
import { Modal } from "antd";

function modalReducer(state, action) {
  // console.log(state, action);
  const { type, results } = action;
  switch (type) {
    case "success":
      const { title, message } = results;
      return {
        ...state,
        isModalVisible: true,
        modalTitle: title,
        modalMessage: message
      };
    case "modal-show":
      return { ...state, isModalVisible: true };
    case "modal-ok":
      return {
        ...state,
        isModalVisible: false,
        modalTitle: "",
        modalMessage: ""
      };
    case "modal-cancel":
      return {
        ...state,
        isModalVisible: false,
        modalTitle: "",
        modalMessage: ""
      };
    default:
      throw new Error();
  }
}

export function useModal() {
  const [modal, dispatchModal] = useReducer(modalReducer, {
    isModalVisible: false,
    modalTitle: "",
    modalMessage: ""
  });

  return [modal, dispatchModal];
}

export default function CustomModal(props) {
  const { modal, dispatchModal, children } = props;
  const { modalTitle, modalMessage, isModalVisible } = modal;
  // console.log("modal", modal);
  // console.log("modal", props);

  function handleOk() {
    dispatchModal({ type: "modal-ok" });
  }

  function handleCancel() {
    dispatchModal({ type: "modal-cancel" });
  }

  return (
    <Modal
      title={modalTitle}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>{modalMessage}</p>
      {children}
    </Modal>
  );
}
