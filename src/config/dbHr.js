import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config();

const connection = mysql.createConnection({

    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST
})

export default connection