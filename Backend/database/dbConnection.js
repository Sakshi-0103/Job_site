import mongoose from "mongoose";

const MONGO_URI =  'mongodb://127.0.0.1:27017'

export const dbConnection = () => {
  mongoose
    .connect(MONGO_URI, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};