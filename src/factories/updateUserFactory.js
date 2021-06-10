const UsersRepository = require("../repositories/usersRepository");
const UpdateUserService = require("../services/UpdateUserService");

function updateUserFactory() {
  const usersRepository = new UsersRepository();

  const updateUserService = new UpdateUserService({
    usersRepository,
  });

  return updateUserService;
}

module.exports = {
  updateUserFactory,
};
