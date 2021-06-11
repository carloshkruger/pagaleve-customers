const setupDynamooseDBClient = require("./src/utils/setupDynamooseDBClient");

const { createUserFactory } = require("./src/factories/createUserFactory");
const { deleteUserFactory } = require("./src/factories/deleteUserFactory");
const { findUserByIdFactory } = require("./src/factories/findUserByIdFactory");
const { updateUserFactory } = require("./src/factories/updateUserFactory");
const { listUsersFactory } = require("./src/factories/listUsersFactory");
const { searchFactory } = require("./src/factories/searchFactory");

const createUserService = createUserFactory();
const findUserByIdService = findUserByIdFactory();
const updateUserService = updateUserFactory();
const deleteUserService = deleteUserFactory();
const listUsersService = listUsersFactory();
const searchService = searchFactory();

setupDynamooseDBClient();

module.exports = {
  createUser: createUserService.execute.bind(createUserService),
  findUser: findUserByIdService.execute.bind(findUserByIdService),
  updateUser: updateUserService.execute.bind(updateUserService),
  deleteUser: deleteUserService.execute.bind(deleteUserService),
  listUsers: listUsersService.execute.bind(listUsersService),
  search: searchService.execute.bind(searchService),
};
