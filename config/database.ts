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
  console.log("Db ==>", process.env.MONGO_URI);
  try {
    mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.aij5irh.mongodb.net/propertyPulse?retryWrites=true&w=majority&appName=Cluster0" ??
        ""
    );
    connected = true;
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
