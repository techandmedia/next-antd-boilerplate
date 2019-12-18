import mySQL from "utils/service-api/mysql";
import escape from "sql-template-strings";
/**
 * Mencegah SQL Injection
 */

export default async function checkStatus(req, res) {
  console.log("LOGIN", req.body);
  const username = req.body.username;
  const password = req.body.password;
  const token = req.body.token;
  const queryLogin = escape`
    SELECT * FROM user_login WHERE username = ${username}
  `;
  // const { results, failed, error } = await mySQL.query(queryLogin);
  // // console.log(error.code);

  // if (failed) {
  //   res.send({
  //     code: error.errno,
  //     title: error.code,
  //     message: error.sqlMessage
  //   });
  // }

  // // if (error.code === undefined) {
  // //   res.send({
  // //     code: 300,
  // //     title: "database",
  // //     message: "database not connected",
  // //     data: results
  // //   });
  // // }

  // if (results.length > 0) {
  //   if (results[0].password === password) {
  //     res.send({
  //       code: 200,
  //       title: "login",
  //       message: "login success",
  //       data: results
  //     });
  //   } else {
  //     res.send({
  //       code: 210,
  //       title: "login",
  //       message: "username atau password salah",
  //       data: []
  //     });
  //   }
  // } else {
  //   res.send({
  //     code: 201,
  //     title: "login",
  //     message: "username belum terdaftar",
  //     data: []
  //   });
  // }

  /**
   * UNTUK KEPERLUAN DEMO
   */

  if (token === "123456789") {
    res.send({
      code: 200,
      title: "token",
      message: "anda sudah terdaftar, silahkan upload bukti pembayaran",
      data: []
    });
  }

  if (token === "11111111") {
    res.send({
      code: 200,
      title: "token",
      message:
        "anda sudah terdaftar sebagai mahasiswa, silahkan cek email untuk cek nim dan password anda",
      data: []
    });
  } else {
    res.send({
      code: 300,
      title: "token",
      message: "token tidak terdaftar, harap registrasi ulang",
      data: []
    });
  }
}

/**
 * UNTUK KEPERLUAN DEMO
 */

if (token === "123456789") {
  res.send({
    code: 200,
    title: "token",
    message: "anda sudah terdaftar, silahkan upload bukti pembayaran",
    data: []
  });
}

if (token === "11111111") {
  res.send({
    code: 200,
    title: "token",
    message:
      "anda sudah terdaftar sebagai mahasiswa, silahkan cek email untuk cek nim dan password anda",
    data: []
  });
} else {
  res.send({
    code: 300,
    title: "token",
    message: "token tidak terdaftar, harap registrasi ulang",
    data: []
  });
}