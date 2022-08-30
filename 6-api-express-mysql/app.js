import express from "express";
import morgan from "morgan";

/* importing the ProductRoutes from the product.routes file*/
import productRoutes from "./src/routes/product.routes";

const app = express();

/*setting the port to 5000 */ /*el puerto es la puerta aunque comparta la misma dirección, cada puerto hará algo distinto*/
app.set("port",5000);

/* middlewars */
app.use(morgan("dev"));
app.use(express.json());

app.use("/api-restfull/products",productRoutes);
export default app;