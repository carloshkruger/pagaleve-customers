const SearchService = require("../src/services/SearchService");
const FakeUsersRepository = require("./fakes/FakeUserRepository");

let searchService;
let usersRepository = new FakeUsersRepository();

describe("SearchService", () => {
  beforeEach(() => {
    searchService = new SearchService({ usersRepository });
  });

  test("should return an error if the text is not provided", async () => {
    const response = await searchService.execute({
      queryStringParameters: {
        text: "",
      },
    });

    expect(response.statusCode).toBe(400);

    const response2 = await searchService.execute();

    expect(response2.statusCode).toBe(400);
  });

  test("should return the user list", async () => {
    jest
      .spyOn(usersRepository, "freeTextSearch")
      .mockImplementation(async () => [
        {
          id: new Date().getTime(),
          name: "valid name",
          email: "valid_email@email.com",
          createdAt: new Date().toISOString(),
        },
      ]);

    const response = await searchService.execute({
      queryStringParameters: {
        text: "valid name",
      },
    });

    expect(response.statusCode).toBe(200);
  });
});
