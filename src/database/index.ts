import "../loadEnvironment";
import Debug from "debug";
import chalk from "chalk";
import mongoose from "mongoose";
const debug = Debug("resos:database:index");

const connectDB = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    debug(chalk.blue("Connected to database"));
  } catch (err) {
    debug(chalk.red("Error connecting to database", err.message));
  }
};

export default connectDB;
