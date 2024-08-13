import mongoose from "mongoose";

let connected = false;
const connectDB = async () => {
  mongoose.set("strictQuery", false);

  //   If Database is connected dont connect again
  if (connected) {
    console.log("DB is connected");
    return;
  }
  //   Connect Database
  console.log("Db ==>", process.env.MONGODB_URI);
  try {
    await mongoose.connect(process.env.MONGODB_URI ?? "");
    connected = true;
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
