const AppError = require("../utils/AppError");
const handleError = require("../utils/handleError");

class DeleteUserService {
  constructor({ usersRepository }) {
    this.usersRepository = usersRepository;
  }

  async execute(event) {
    try {
      const { userId } = event.pathParameters;

      if (!userId) {
        throw new AppError("userId is required.");
      }

      const user = await this.usersRepository.findById(userId);

      if (!user) {
        throw new AppError("User not found.", 404);
      }

      await this.usersRepository.delete(userId);

      return {
        statusCode: 204,
      };
    } catch (error) {
      return handleError(error);
    }
  }
}

module.exports = DeleteUserService;
