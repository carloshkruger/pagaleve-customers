const UserSchema = require("../schemas/UserSchema");

class UsersRepository {
  async create(user) {
    await UserSchema.create(user);
  }

  async findByEmail(email) {
    const results = await UserSchema.scan({ email }).exec();

    return results[0];
  }

  async findById(id) {
    const results = await UserSchema.query({
      id: {
        eq: id,
      },
    }).exec();

    return results[0];
  }

  async update(user) {
    await UserSchema.update(user);
  }
}

module.exports = UsersRepository;
