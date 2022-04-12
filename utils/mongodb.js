import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
  } else {
    mongoose.connect(process.env.MONGODB_URI);
    mongoose.connection.once("open", () =>
      console.log("First connection to the DB")
    );
  }
};

export default dbConnect;
