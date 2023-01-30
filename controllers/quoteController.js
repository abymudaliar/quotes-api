const Quotes = require("../models/Quotes");
const { StatusCodes } = require("http-status-codes");

const getAllQuotes = async (req, res) => {
  const quotes = await Quotes.find({});
  res.status(StatusCodes.OK).json({ res: quotes });
};
module.exports = { getAllQuotes };
