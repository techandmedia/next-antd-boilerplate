import { useEffect, useReducer } from "react";
import { Form, Modal } from "components";
import modalReducer from "../utils/reducers/modal-reducer";

import usePostData from "api/usePostData";

export default function Registration() {
  const [results, postData] = usePostData();
  const [modal, dispatchModal] = useReducer(modalReducer, {
    isModalVisible: false
  });

  useEffect(() => {
    // console.log(results);
    if (results.code !== "") {
      dispatchModal({ type: "success", results });
    }
  }, [results]);

  return (
    <React.Fragment>
      <Modal modal={modal} dispatchModal={dispatchModal} />
      <Form registerForm postData={postData} />
    </React.Fragment>
  );
}
