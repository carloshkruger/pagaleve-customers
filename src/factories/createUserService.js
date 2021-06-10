const UsersRepository = require("../repositories/usersRepository");
const CreateUserService = require("../services/CreateUserService");

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
