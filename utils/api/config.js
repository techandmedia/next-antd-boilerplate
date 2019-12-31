const URL_DEVELOPMENT = "/api/";
const URL_PRODUCTION = "http://localhost:5000/api/";

module.exports = {
  URL: process.env.NODE_ENV === "development" ? URL_DEVELOPMENT : URL_PRODUCTION
};
