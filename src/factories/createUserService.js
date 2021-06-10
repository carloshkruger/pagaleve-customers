const CreateUserService = require("../services/createUserService");

class UsersRepository {
  async findByEmail() {
    return null;
  }

  async create() {}
}

function createInstance() {
  const usersRepository = new UsersRepository();

  const createUserService = new CreateUserService({
    usersRepository,
  });

  return createUserService;
}

module.exports = {
  createInstance,
};
