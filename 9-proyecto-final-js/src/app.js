
import express from "express";
import morgan from "morgan";

//routes
import booksRoutes from "./routes/books.routes";

const app = express();
// /* Setting the port to 4000*/
app.set("port", 3000);

// /* middlware funciones pequeñas entre una peticion y una respuesta*/
/* permite que en la consola se tenga listado de peticiones bajo ruta y peticiones*/

// middlware 
app.use(morgan("dev")); 

// //routes
app.use("/api/books", booksRoutes);
app.use(express.json());

export default app;
