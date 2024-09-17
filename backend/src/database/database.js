import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config()

export const pool = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
}).promise();

pool.getConnection()
    .then(connection => {
        console.log("Pomyślnie połączono z bazą danych");
        connection.release();
    })
    .catch(error => {
        console.error("Błąd połączenia się z bazą danych", error);
        process.exit(1);
    });

