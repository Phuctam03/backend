const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET /api/posts - Lấy danh sách bài post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ crawledAt: -1 }); // Sắp xếp theo crawledAt giảm dần
    res.json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: err.message });
  }
});

// GET /api/posts/:id - Lấy chi tiết bài post theo ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching post", error: err.message });
  }
});

module.exports = router;
