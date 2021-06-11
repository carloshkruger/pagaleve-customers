const dynamoose = require("dynamoose");
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
    const result = await UserSchema.get({ id });

    return result;
  }

  async freeTextSearch(text) {
    return UserSchema.scan(
      new dynamoose.Condition()
        .where("id")
        .contains(text)
        .or()
        .where("name")
        .contains(text)
        .or()
        .where("email")
        .contains(text)
        .or()
        .where("createdAt")
        .contains(text)
    ).exec();
  }

  async findAll() {
    return UserSchema.scan().exec();
  }

  async update(user) {
    await UserSchema.update(user);
  }

  async delete(id) {
    await UserSchema.delete({ id });
  }
}

module.exports = UsersRepository;
