import { useState, useReducer } from "react";
import { Modal } from "antd";

function modalReducer(state, action) {
  console.log(state, action);
  const { type, results } = action;
  switch (type) {
    case "success":
      const { status, message } = results;
      return {
        ...state,
        isModalVisible: true,
        modalTitle: status,
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
  const [modal, dispatchModal] = useModal();

  console.log("modal", modal);
  console.log("modal", props);

  function handleOk() {
    dispatchModal({ type: "modal-ok" });
  }

  function handleCancel() {
    dispatchModal({ type: "modal-cancel" });
  }

  return (
    <Modal
      title={props.modal.title}
      visible={props.modal.isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>{props.modal.message}</p>
      {props.children}
    </Modal>
  );

  // function handleOk() {
  //   props.dispatchModal({ type: "modal-ok" });
  // }

  // function handleCancel() {
  //   props.dispatchModal({ type: "modal-cancel" });
  // }

  // return (
  //   <Modal
  //     title={props.modal.modalTitle}
  //     visible={props.modal.isModalVisible}
  //     onOk={handleOk}
  //     onCancel={handleCancel}
  //   >
  //     <p>{props.modal.modalMessage}</p>
  //     {props.children}
  //   </Modal>
  // );
}
