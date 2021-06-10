"use strict";

const { createInstance } = require("./src/factories/createUserService");

const createUserService = createInstance();

module.exports = {
  createUser: createUserService.execute.bind(createUserService),
};
