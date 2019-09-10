let { Mongo } = require("../database");

class UsersService {
  constructor() {
    this.collection = "users";
    this.mongoDB = new Mongo();
  }

  async getUsers() {
    const users = await this.mongoDB.getAll(this.collection);
    return users;
  }

  async getUser(id) {
    const user = await this.mongoDB.get(id, this.collection);
    return user;
  }

  async createUser(data) {
    const users = await this.mongoDB.create(data, this.collection);
    return users;
  }

  async updateUser(id, data) {
    const user = await this.mongoDB.update(id, data, this.collection);
    return user;
  }

  async deleteUser(id) {
    const user = await this.mongoDB.delete(id, this.collection);
    return user;
  }
}

module.exports = UsersService;
