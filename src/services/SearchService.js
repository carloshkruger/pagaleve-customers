const AppError = require("../utils/AppError");
const handleError = require("../utils/handleError");

class SearchService {
  constructor({ usersRepository }) {
    this.usersRepository = usersRepository;
  }

  async execute(event) {
    try {
      const { text } = event?.queryStringParameters || {};

      if (!text) {
        throw new AppError("text is required.");
      }

      const users = await this.usersRepository.freeTextSearch(text);

      return {
        statusCode: 200,
        body: JSON.stringify(users),
      };
    } catch (error) {
      return handleError(error);
    }
  }
}

module.exports = SearchService;
