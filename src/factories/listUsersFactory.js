const UsersRepository = require("../repositories/usersRepository");
const ListUsersService = require("../services/ListUsersService");

function listUsersFactory() {
  const usersRepository = new UsersRepository();

  const listUsersService = new ListUsersService({
    usersRepository,
  });

  return listUsersService;
}

module.exports = {
  listUsersFactory,
};
