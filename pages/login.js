import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Form, CustomForm } from "components";
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
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const result = await axios("http://localhost:3000/api/credentials/login");
      const res = await result;
      setData(res);
    }

    getData();
  }, []);

  return (
    <CustomForm currentRoute={props.currentRoute}>
      <Form renderForm={formLogin} loginForm {...props} />
    </CustomForm>
  );
}
