import mySQL from "./config/my-sql";
export default (req, res) => {
  // req.body berbentuk objek, jadi dari UI harus berbentuk objek juga
  const query = req.body;
  const id_mahasiswa = req.body.id_mahasiswa;
  const TABLE_NAME = "revisi_mahasiswa";

  console.log("query body", req.body);
  mySQL.query(
    `SELECT * FROM ${TABLE_NAME} WHERE id_mahasiswa = ?`,
    [id_mahasiswa],
    function(err, results, fields) {
      if (err) {
        console.log("IS IT ERROR???=========", err);
        res.send({
          code: 400,
          status: "Failed",
          message: "Something wrong with the connection"
        });
      } else {
        if (results.length === 0) {
          mySQL.query(
            `INSERT INTO ${TABLE_NAME} SET ?`,
            query,
            (err, results, fields) => {
              res.send({
                code: 200,
                status: "Success",
                message: "Data Mahasiswa berhasil didaftarkan",
                results: JSON.stringify(results),
                error: err,
                field: fields
              });
            }
          );
        }
        if (results.length > 0) {
          console.log(results);
          if (results[0].id_mahasiswa === id_mahasiswa) {
            res.send({
              code: 204,
              status: "Failed",
              message: "NIM sudah terdaftar, harap pilih NIM lain!"
            });
          } else {
            mySQL.query(
              `INSERT INTO ${TABLE_NAME} SET ?`,
              query,
              (err, results, fields) => {
                res.send({
                  code: 200,
                  status: "Success",
                  message: "Data Mahasiswa berhasil didaftarkan",
                  results: JSON.stringify(results),
                  error: err,
                  field: fields
                });
              }
            );
          }
        }
      }
    }
  );
};
