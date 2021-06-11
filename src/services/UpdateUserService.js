const AppError = require("../utils/AppError");
const handleError = require("../utils/handleError");

class UpdateUserService {
  constructor({ usersRepository }) {
    this.usersRepository = usersRepository;
  }

  async execute(event) {
    try {
      if (!event.body) {
        throw new AppError("data is required.");
      }

      const { userId } = event.pathParameters;
      const { name, email } = JSON.parse(event.body);

      if (!userId) {
        throw new AppError("userId is required.");
      }

      if (!name) {
        throw new AppError("name is required.");
      }

      if (!email) {
        throw new AppError("email is required.");
      }

      const user = await this.usersRepository.findById(userId);

      if (!user) {
        throw new AppError("User not found.", 404);
      }

      user.name = name;
      user.email = email;

      await this.usersRepository.update(user);

      return {
        statusCode: 200,
        body: JSON.stringify(user),
      };
    } catch (error) {
      return handleError(error);
    }
  }
}

module.exports = UpdateUserService;
