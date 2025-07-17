const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  imageUrl: {
    type: String,
    default: "",
  },
  articleUrl: {
    type: String,
    require: true,
    unique: true,
  },
  crawledAt: {
    type: Date,
    default: Date.now,
  },
});

postSchema.index({ crawledAt: -1 }); //sap xep giam dan
postSchema.index({ title: "text" }); // Ho tro tim kiem theo title

module.exports = mongoose.model("Post", postSchema);
