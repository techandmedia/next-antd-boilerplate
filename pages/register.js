import { useEffect, useReducer } from "react";
import { Form } from "components";
import Modal, { useModal } from "../components/modal";
// import modalReducer from "../utils/reducers/modal-reducer";

import usePostData from "api/usePostData";

export default function Registration() {
  const [results, postData] = usePostData();
  const [modal, dispatchModal] = useModal();

  useEffect(() => {
    // console.log(results);
    if (results.code !== "") {
      dispatchModal({ type: "success", results });
    }
  }, [results]);

  return (
    <React.Fragment>
      {/* <Modal /> */}
      <Form registerForm postData={postData} dispatchModal={dispatchModal} />
    </React.Fragment>
  );
}
