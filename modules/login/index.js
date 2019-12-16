import { useEffect, useReducer } from "react";
import { Form, Modal, useModal } from "components";
import usePostData from "api/usePostData";
// const IMAGE_URL = "../static/img/login/";
// const image1 = "Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-13.jpg";
// const image2 = "Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-2.jpg";
// const image3 = "Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-6.jpg";
// const image4 = "Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-8.jpg";

const formLogin = [
  {
    field: "username",
    placeholder: "Username",
    icon: "user",
    rules: [{ required: true, message: "Please input your username!" }]
  },
  {
    field: "password",
    placeholder: "Password",
    icon: "lock",
    rules: [
      {
        required: true,
        message: "Please input your password!"
      }
    ]
  }
];

export default function Login(props) {
  const [results, postLogin] = usePostData();
  const [modal, dispatchModal] = useModal();

  const API = "user/login";

  useEffect(() => {
    if (!results.isLoading) {
      dispatchModal({ type: "success", results });
    }
  }, [results]);

  return (
    <React.Fragment>
      <Modal modal={modal} dispatchModal={dispatchModal} />;
      <Form
        renderForm={formLogin}
        postData={postLogin}
        API={API}
        loginForm
        {...props}
      />
    </React.Fragment>
  );
}
