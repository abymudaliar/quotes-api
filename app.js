const express = require("express");
const app = express();
const cors = require("cors");
const quotes = require("./routes/quoteRoutes");
const connectDB = require("./db/connect");
require("dotenv").config();
//middleware

app.use(express.json());
app.use(cors());
//Routes
app.get("/hello", (req, res) => {
  res.send("Quotes");
});

app.use("/api/v1/quotes", quotes);

const port = 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
