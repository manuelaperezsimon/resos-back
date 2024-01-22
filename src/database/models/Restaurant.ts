import { model, Schema } from "mongoose";

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
  restaurantHours: [
    {
      open: {
        type: String,
        required: true,
      },
      close: {
        type: String,
        required: true,
      },
    },
    {
      open: {
        type: String,
      },
      close: {
        type: String,
      },
    },
  ],
  status: {
    type: Boolean,
  },
  tags: {
    type: Array,
  },
});

const Restaurant = model("Restaurant", restaurantSchema, "restaurantes");

export default Restaurant;
