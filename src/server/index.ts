import express from "express";
import morgan from "morgan";
import cors from "cors";
import { generalError, notFoundError } from "./middlewares/errors";
import restaurantsRouter from "./routes/restaurantRouter/restaurantRouter";

const app = express();
app.disable("x-powered-by");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/restaurants", restaurantsRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
