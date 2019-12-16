import mySQL from "utils/service-api/mysql";
import escape from "sql-template-strings";
/**
 * Mencegah SQL Injection
 */

export default async function login(req, res) {
  console.log("LOGIN", req.body);
  const username = req.body.username;
  const password = req.body.password;
  const queryLogin = escape`
    SELECT * FROM user_login WHERE username = ${username}
  `;
  const { results, failed, error } = await mySQL.query(queryLogin);

  if (failed) {
    res.send({
      code: error.errno,
      title: error.code,
      message: error.sqlMessage
    });
  } else if (results.length > 0) {
    if (results[0].password === password) {
      res.send({
        code: 200,
        title: "login",
        message: "login success",
        data: results
      });
    } else {
      res.send({
        code: 200,
        title: "login",
        message: "username atau password salah",
        data: []
      });
    }
  } else {
    res.send({
      code: 200,
      title: "login",
      message: "username belum terdaftar",
      data: []
    });
  }
}
