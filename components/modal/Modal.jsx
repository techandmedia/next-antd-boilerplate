import { useState, useReducer } from 'react';
import { Modal } from 'antd';

function modalReducer(state, action) {
  // console.log(state, action);
  const { type, results } = action;
  
  switch (type) {
    case 'success':
      const { data } = results;
      const { nik, email, nama_lengkap } = data;
      return {
        ...state,
        isModalVisible: true,
        modalTitle: results.title,
        modalMessage: `${nama_lengkap} dengan nik: ${nik} berhasil dibuat`,
      };

    case 'error':
      return {
        ...state,
        isModalVisible: true,
        modalTitle: results.title,
        modalMessage: results.message,
      };

    case 'modal-show':
      return { ...state, isModalVisible: true };

    case 'modal-ok':
      return {
        isModalVisible: false,
        modalTitle: '',
        modalMessage: '',
      };

    case 'modal-cancel':
      return {
        isModalVisible: false,
        modalTitle: '',
        modalMessage: '',
      };
    default:
      throw new Error();
  }
}

export function useModal() {
  const [modal, dispatchModal] = useReducer(modalReducer, {
    isModalVisible: false,
    modalTitle: '',
    modalMessage: '',
  });

  return [modal, dispatchModal];
}

export default function CustomModal(props) {
  const { modal, dispatchModal, children } = props;
  const { modalTitle, modalMessage, isModalVisible } = modal;
  // console.log("modal", modal);
  // console.log("modal", props);

  function handleOk() {
    dispatchModal({ type: 'modal-ok' });
  }

  function handleCancel() {
    dispatchModal({ type: 'modal-cancel' });
  }

  return (
    <Modal
      title={modalTitle}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}>
      <p>{modalMessage}</p>
      {children}
    </Modal>
  );
}
