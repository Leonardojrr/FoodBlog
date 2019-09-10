let { Mongo } = require("../database");

class PostsService {
  constructor() {
    this.collection = "posts";
    this.mongoDB = new Mongo();
  }

  async getPosts() {
    const posts = await this.mongoDB.getAll(this.collection);
    return posts;
  }

  async getPost(id) {
    const post = await this.mongoDB.get(id, this.collection);
    return post;
  }

  async createPost(data) {
    const post = await this.mongoDB.create(data, this.collection);
    return post;
  }

  async updatePost(id, data) {
    const post = await this.mongoDB.update(id, data, this.collection);
    return post;
  }

  async deletePost(id) {
    const post = await this.mongoDB.delete(id, this.collection);
    return post;
  }
}

module.exports = PostsService;
