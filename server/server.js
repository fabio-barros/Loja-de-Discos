import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import colors from "colors";

dotenv.config();

connectDB();

const app = express();

app.use(express.json())

// Rotas
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

//  Middlewares
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(
    5000,
    console.log(
        `Server rodando no modo ${process.env.NODE_ENV} na porta ${PORT}`.yellow
            .bold
    )
);
