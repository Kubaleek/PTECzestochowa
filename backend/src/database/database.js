import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config()
export const pool = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    port: process.env.MYSQL_ADDON_PORT,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    uri: process.env.MYSQL_ADDON_URI,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 60000  // 30 seconds
}).promise();
pool.getConnection()
  .then(connection => {
    console.log("Pomyślnie połączono z bazą danych");
    connection.release();
  })
  .catch(error => {
    if (error.code === 'ETIMEDOUT') {
      console.error("Błąd połączenia się z bazą danych", error);
      setTimeout(() => {
        pool.getConnection()
          .then(connection => {
            console.log("Pomyślnie połączono z bazą danych");
            connection.release();
          })
          .catch(error => {
            console.error("Błąd połączenia się z bazą danych", error);
            process.exit(1);
          });
      }, 5000); // retry after 5 seconds
    } else {
      console.error("Błąd połączenia się z bazą danych", error);
      process.exit(1);
    }
  });
