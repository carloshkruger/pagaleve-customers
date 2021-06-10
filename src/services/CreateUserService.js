const { v4 } = require("uuid");

const AppError = require("../utils/AppError");
const handleError = require("../utils/handleError");

class CreateUserService {
  constructor({ usersRepository }) {
    this.usersRepository = usersRepository;
  }

  async execute(event) {
    try {
      const { name, email } = JSON.parse(event.body);

      if (!name) {
        throw new AppError("name is required.");
      }

      if (!email) {
        throw new AppError("email is required.");
      }

      const userByEmail = await this.usersRepository.findByEmail(email);

      if (userByEmail) {
        throw new AppError("E-mail already in use.", 409);
      }

      const user = {
        id: v4(),
        name,
        email,
        createdAt: new Date().toISOString(),
      };

      await this.usersRepository.create(user);

      return {
        statusCode: 201,
        body: JSON.stringify(user),
      };
    } catch (error) {
      return handleError(error);
    }
  }
}

module.exports = CreateUserService;
