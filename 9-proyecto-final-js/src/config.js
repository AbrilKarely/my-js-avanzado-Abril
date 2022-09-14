import {config } from "dotenv";

config();

export default {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    port: process.env.PORT || "3000"
};



