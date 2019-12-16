import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Form } from "components";
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
  const [data, postData] = usePostData();

  useEffect(() => {
    postData("credentials/login");
  }, []);

  useEffect(() => {
    if (!data.isLoading) {
      console.log(data);
    }
  }, [data]);

  return <Form renderForm={formLogin} loginForm {...props} />;
}
