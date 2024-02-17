import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
//configure env
dotenv.config();

//database config
connectDB();

//es module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, '.../frontend/canteen-app/build')))

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.use('*',function(req,res){  //new
 res.sendFile(path.join(__dirname, '.../frontend/canteen-app/build/index.html')) //new
} )

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
