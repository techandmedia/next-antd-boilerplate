const mysql = require('serverless-mysql');

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database:
      process.env.NODE_ENV === 'development'
        ? process.env.MYSQL_DATABASE_DEV
        : process.env.MYSQL_DATABASE_PROD,
  },
});

exports.query = async query => {
  try {
    const results = await db.query(query);
    await db.end();
    return { results };
  } catch (error) {
    return { failed: true, error };
  }
};
