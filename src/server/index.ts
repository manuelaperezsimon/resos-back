import express from "express";
import morgan from "morgan";
import cors from "cors";
import { generalError, notFoundError } from "./middlewares/errors";
import restaurantesRouter from "./routes/restaurantRouter/restaurantRouter";

const app = express();
app.disable("x-powered-by");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/restaurants", restaurantesRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
