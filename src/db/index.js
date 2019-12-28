import mongoose from "mongoose";

export default async function loadDB({ url }) {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
    // useUnifiedTopology: true 
  });
}

