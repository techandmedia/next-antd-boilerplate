export default function config(req, res) {
  console.log(process.env.URL_DEVELOPMENT);
  console.log(process.env.ROOT_API);
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASS);

  res.send({
    URL: process.env.URL_DEVELOPMENT,
    message: "login succeed",
    // data: fakeUser
  });
}
