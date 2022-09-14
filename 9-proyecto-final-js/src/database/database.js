import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
    // host: "31.220.104.219",
    // database: "u917498081_dev_f",
    // user: "u917498081_js_a",
    // password: "3st43sl4c0ntr4s3N14"
});

export const getConnection = () => {
    console.log (connection)
    return connection;
};

// module.exports = {
//     getConnection
// };