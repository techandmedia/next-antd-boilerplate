const URL_DEVELOPMENT = "http://localhost:3000/api/";
const URL_PRODUCTION = "http://localhost:5000/api/";

module.exports = {
  URL: process.env.NODE_ENV === "development" ? URL_DEVELOPMENT : URL_PRODUCTION
};
