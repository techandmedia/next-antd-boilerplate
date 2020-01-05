const URL_DEVELOPMENT = "http://localhost:3001/";
const URL_PRODUCTION = "https://akper-service.subarnanto.com/";

module.exports = {
  URL: process.env.NODE_ENV === "development" ? URL_DEVELOPMENT : URL_PRODUCTION
};
