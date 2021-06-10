"use strict";

const { createInstance } = require("./src/factories/createUserService");
const {
  createInstance: createInstanceFindUserByIdFactory,
} = require("./src/factories/findUserByIdFactory");
const { updateUserFactory } = require("./src/factories/updateUserFactory");

const createUserService = createInstance();
const findUserByIdService = createInstanceFindUserByIdFactory();
const updateUserService = updateUserFactory();

module.exports = {
  createUser: createUserService.execute.bind(createUserService),
  findUser: findUserByIdService.execute.bind(findUserByIdService),
  updateUser: updateUserService.execute.bind(updateUserService),
};
