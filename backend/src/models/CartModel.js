const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    color: { type: String, required: true },
    qty: { type: String, required: true },
    size: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const CartModel = mongoose.model("carts", dataSchema);

module.exports = CartModel;
