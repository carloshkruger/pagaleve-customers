"use strict";

const { createInstance } = require("./src/factories/createUserService");
const {
  createInstance: createInstanceFindUserByIdFactory,
} = require("./src/factories/findUserByIdFactory");

const createUserService = createInstance();
const findUserByIdService = createInstanceFindUserByIdFactory();

module.exports = {
  createUser: createUserService.execute.bind(createUserService),
  findUser: findUserByIdService.execute.bind(findUserByIdService),
};
