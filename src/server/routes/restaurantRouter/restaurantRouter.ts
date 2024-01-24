import express from "express";
import getAllRestaurants from "../../controllers/restaurantes/restaurantesController";

const restaurantsRouter = express.Router();

restaurantsRouter.get("/", getAllRestaurants);

export default restaurantsRouter;
