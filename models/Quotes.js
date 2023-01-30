const mongoose = require("mongoose");

const QuotesSchema = mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Quotes", QuotesSchema);
