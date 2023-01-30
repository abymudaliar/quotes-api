require("dotenv").config();

const connectDB = require("./db/connect");
const Quotes = require("./models/Quotes");

const jsonQuotes = require("./quotes.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Quotes.deleteMany();
    await Quotes.create(jsonQuotes);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
