import mySQL from "utils/service-api/mysql";
import escape from "sql-template-strings";
/**
 * Mencegah SQL Injection
 */

export default async function get(req, res) {
  const queryLogin = escape`
    SELECT * FROM user_login
  `;
  const { results, failed, error } = await mySQL.query(queryLogin);


  if (failed) {
    res.send({
      code: error.errno,
      title: error.code,
      message: error.sqlMessage
    });
  } else {
    res.send({
      code: 200,
      title: "status",
      message: "berhasil mendapatkan status",
      data: results
    });
  }

}