import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      //useCreateIndex: true,
      //useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB was connected successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

export default dbConnect;
