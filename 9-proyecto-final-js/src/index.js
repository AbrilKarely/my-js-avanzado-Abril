
// // portal para que el servidor escuche

import app from "./app";

// funcion principal
const main =() =>{
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};

main();