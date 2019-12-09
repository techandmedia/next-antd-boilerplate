import { Form } from "components";
import Modal, { useModal } from "../components/modal";

export default function Login(props) {
  const [modal, dispatchModal] = useModal();

  return (
    <React.Fragment>
      <Modal modal={modal} />
      <Form loginForm {...props} dispatchModal={dispatchModal} />;
    </React.Fragment>
  );
}
