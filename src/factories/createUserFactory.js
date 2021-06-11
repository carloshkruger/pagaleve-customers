const UsersRepository = require("../repositories/UsersRepository");
const CreateUserService = require("../services/CreateUserService");

function createUserFactory() {
  const usersRepository = new UsersRepository();

  const createUserService = new CreateUserService({
    usersRepository,
  });

  return createUserService;
}

module.exports = {
  createUserFactory,
};
