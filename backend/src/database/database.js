import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config()

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
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