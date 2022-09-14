
const express = require ("express");
const colors = require ("colors");

const app = express();
const port = 2000;

const routerApi = require("./routers/main.controller");

app.use(express.json());

app.listen(port, ()=>{
    console.log("Servidor express listening...".rainbow);
});

routerApi(app);