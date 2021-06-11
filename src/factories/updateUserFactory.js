const UsersRepository = require("../repositories/UsersRepository");
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
