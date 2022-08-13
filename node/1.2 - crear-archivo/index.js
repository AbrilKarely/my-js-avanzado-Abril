const fs = require ("fs");

const path = "./"; //lugar donde lo vamos a poner
// regresar ../
// ahi mismo ./
const nameFile = "my.sile.txt"; // donde lo vamos a poner
const contentForFile = "Esto lo escribí desde node"; // que contenido va a tener

// path absoluto:/Users/abrilalcantara/Documents/DevF-Gen17/my-js-avanzado-Abril/node/1.2 - crear-archivo
// path relativo: node/1.2 - crear-archivo
const filePath = `${path}/${nameFile}`;

fs.writeFile(filePath, contentForFile, (err) => {
    if (err){
        throw err;
    } else {
        console.log ("archivo creado con exito..!");
    }
});