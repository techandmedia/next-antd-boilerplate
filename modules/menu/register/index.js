import { useEffect, useContext } from "react";
import { Form, Modal, useModal } from "components";
import { UserContext } from "context/Global-Context";
import formRegister from "./form";

const API = "user/register";

export default function Register(props) {
  const { results, postData } = props
  const { dispatchUser } = useContext(UserContext);
  const [modal, dispatchModal] = useModal();

  useEffect(() => {
    const { isLoading, code } = results;
    if (!isLoading && code === 200) {
      dispatchModal({ type: "success", results });
      setTimeout(() => {
        dispatchUser({
          type: "login-success",
          data: results.data,
          cookie: "COOKIES"
        });
      }, 1000);
    }

    if (!isLoading && code > 200) {
      dispatchModal({ type: "success", results });
    }
  }, [results]);

  return (
    <React.Fragment>
      <Modal modal={modal} dispatchModal={dispatchModal} />
      <Form
        registerForm
        renderForm={formRegister}
        postData={postData}
        API={API}
        {...props}
      />
    </React.Fragment>
  );
}
