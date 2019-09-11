let express = require("express");
let PostsService = require("../services/posts");
let router = express.Router();

let postservice = new PostsService();

router.get("/", async (req, res, next) => {
  try {
    const posts = await postservice.getPosts();

    res.status(200).json({
      data: posts,
      msg: "posts list"
    });
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res, next) => {
  let { id } = req.params;

  const post = await postservice.getPost(id);

  if (post.length !== 0)
    res.status(200).json({
      data: post,
      msg: "Specific post"
    });
  else {
    res.send({ status: 404, msg: "the post doesnt exist" });
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { body: newPost } = req;

  try {
    const state = await postservice.updatePost(id, newPost);

    res.json({
      status: 200,
      msg: "Post updated"
    });
  } catch (err) {}
});

router.post("/", async (req, res, next) => {
  const { body: post } = req;

  post.date = new Date();

  if (Object.keys(post).length !== 0) {
    try {
      const state = await postservice.createPost(post);

      res.json({
        status: 201,
        msg: "Post created"
      });
    } catch (err) {
      res.status(404).json({
        msg: "Unable to create post"
      });
    }
  } else {
    res.json({
      status: 404,
      msg: "Unable to create post"
    });
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const state = await postservice.deletePost(id);

    res.json({
      status: 200,
      msg: "Post deleted"
    });
  } catch (error) {}
});

module.exports = router;
