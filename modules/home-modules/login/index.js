import { useEffect, useContext } from 'react';
import { Form, Modal, useModal } from 'components';
import { UserContext } from 'context/Global-Context';
import usePostData from 'api/usePostData';

const formLogin = [
  {
    field: 'username',
    placeholder: 'Username',
    icon: 'user',
    rules: [{ required: true, message: 'Please input your username!' }],
  },
  {
    field: 'password',
    placeholder: 'Password',
    icon: 'lock',
    rules: [
      {
        required: true,
        message: 'Please input your password!',
      },
    ],
  },
];

const API = 'user/login';

export default function Login(props) {
  const { dispatchUser } = useContext(UserContext);
  const [results, postLogin] = usePostData();
  const [modal, dispatchModal] = useModal();

  useEffect(() => {
    const { isLoading, code } = results;
    if (!isLoading && code === 200) {
      dispatchModal({ type: 'success', results });
      setTimeout(() => {
        dispatchUser({
          type: 'login-success',
          data: results.data,
          cookie: 'COOKIES',
        });
      }, 1000);
    }

    if (!isLoading && code > 200) {
      dispatchModal({ type: 'success', results });
    }
  }, [results]);

  return (
    <React.Fragment>
      <Modal modal={modal} dispatchModal={dispatchModal} />
      <Form
        loginForm
        renderForm={formLogin}
        postData={postLogin}
        API={API}
        {...props}
      />
    </React.Fragment>
  );
}
