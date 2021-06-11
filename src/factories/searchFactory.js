const UsersRepository = require("../repositories/UsersRepository");
const SearchService = require("../services/SearchService");

function searchFactory() {
  const usersRepository = new UsersRepository();

  const searchService = new SearchService({
    usersRepository,
  });

  return searchService;
}

module.exports = {
  searchFactory,
};
