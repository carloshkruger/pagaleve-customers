const AppError = require("../utils/AppError");
const handleError = require("../utils/handleError");

class FindUserByIdService {
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

      return {
        statusCode: 200,
        body: JSON.stringify(user),
      };
    } catch (error) {
      return handleError(error);
    }
  }
}

module.exports = FindUserByIdService;
