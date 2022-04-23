const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGO_URI =
    "mongodb+srv://sajansirweb:sajanemp@cluster0.muicw.mongodb.net/emp?retryWrites=true&w=majority";
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection success");
  } catch (err) {
    console.log("connection failed");
    process.exit(1);
  }
};

module.exports = connectDB;
