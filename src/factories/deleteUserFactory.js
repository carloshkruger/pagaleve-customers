const UsersRepository = require("../repositories/usersRepository");
const DeleteUserService = require("../services/DeleteUserService");

function deleteUserFactory() {
  const usersRepository = new UsersRepository();

  const deleteUserService = new DeleteUserService({
    usersRepository,
  });

  return deleteUserService;
}

module.exports = {
  deleteUserFactory,
};
