import express from "express";
import {
  getAllRestaurants,
  searchRestaurantByName,
} from "../../controllers/restaurantes/restaurantesController";

const restaurantsRouter = express.Router();

restaurantsRouter.get("/", getAllRestaurants);
restaurantsRouter.get("/:name", searchRestaurantByName);

export default restaurantsRouter;
