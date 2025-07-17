const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const Post = require("../models/Post");

//Doc File JSON
const jsonFilePath = process.env.JSON_FILE_PATH || "src/output/post.json";
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

//ket noi mongodb
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("connected to MongoDb");
    //Xoa collection
    await Post.deleteMany({});

    const posts = jsonData.map((post) => ({
      title: post.title || "",
      imageUrl: post.imageUrl || "",
      articleUrl: post.articleUrl || "",
      crawledAt: new Date(),
    }));

    await Post.insertMany(posts);
    console.log(`Successfully imported ${posts.length} posts`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error:", err);
    mongoose.connection.close();
  });
