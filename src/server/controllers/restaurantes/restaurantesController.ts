import { NextFunction, Request, Response } from "express";
import Restaurant from "../../../database/models/Restaurant";
import CustomError from "../../../utils/CustomError";

const getAllRestaurants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const restaurants = await Restaurant.find();

    if (restaurants.length === 0) {
      res.status(404).json({ restaurants: "No restaurants found" });
      return;
    }

    res.status(200).json({ restaurants });
  } catch (error) {
    const newError = new CustomError(
      404,
      "Error while getting restaurants",
      "No restaurants found"
    );

    next(newError);
  }
};

export default getAllRestaurants;
