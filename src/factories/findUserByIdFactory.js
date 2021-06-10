const FakeUsersRepository = require("../../tests/fakes/FakeUserRepository");
const FindUserByIdService = require("../services/FindUserByIdService");

function createInstance() {
  const usersRepository = new FakeUsersRepository();

  const findUserByIdService = new FindUserByIdService({
    usersRepository,
  });

  return findUserByIdService;
}

module.exports = {
  createInstance,
};
