const handleError = require("../utils/handleError");

class ListUsersService {
  constructor({ usersRepository }) {
    this.usersRepository = usersRepository;
  }

  async execute() {
    try {
      const users = await this.usersRepository.findAll();

      return {
        statusCode: 200,
        body: JSON.stringify(users),
      };
    } catch (error) {
      return handleError(error);
    }
  }
}

module.exports = ListUsersService;
