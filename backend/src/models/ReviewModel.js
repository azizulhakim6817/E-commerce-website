const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId },
    des: { type: String, required: true },
    rating: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const ReviewsModel = mongoose.model("reviews", dataSchema);

module.exports = ReviewsModel;
