const UsersRepository = require("../repositories/usersRepository");
const FindUserByIdService = require("../services/FindUserByIdService");

function createInstance() {
  const usersRepository = new UsersRepository();

  const findUserByIdService = new FindUserByIdService({
    usersRepository,
  });

  return findUserByIdService;
}

module.exports = {
  createInstance,
};
