import mongoose, { Mongoose } from "mongoose";

let connected = false;
const connectDB = async () => {
  mongoose.set("strictQuery", false);

  //   If Database is connected dont connect again
  if (connected) {
    console.log("DB is connected");
    return;
  }
  //   Connect Database
  try {
    mongoose.connect(process.env.MONGO_URI);
    connected = true;
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
