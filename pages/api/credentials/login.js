import mySQL from "utils/service-api/mysql";
import escape from "sql-template-strings";
/**
 * Mencegah SQL Injection
 */

const queryLogin = escape`
  SELECT * FROM status_kawin WHERE id_sk = 1
`;

export default async function login(req, res) {
  // console.log("",req.body);
  const { results, failed, error } = await mySQL.query(queryLogin);

  if (failed) {
    res.send({
      code: error.errno,
      title: error.code,
      message: error.sqlMessage
    });
  } else if (results.length > 0) {
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
      message: "username atau password salah"
    });
  }
}
