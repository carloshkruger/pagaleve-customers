const SearchService = require("../src/services/SearchService");
const FakeUsersRepository = require("./fakes/FakeUserRepository");

let searchService;
let usersRepository = new FakeUsersRepository();

describe("SearchService", () => {
  beforeEach(() => {
    searchService = new SearchService({ usersRepository });
  });

  test("should return an error if the text is not provided", async () => {
    const freeTextSearchSpy = jest.spyOn(usersRepository, "freeTextSearch");

    const response = await searchService.execute({
      queryStringParameters: {
        text: "",
      },
    });

    expect(response.statusCode).toBe(400);

    const response2 = await searchService.execute();

    expect(response2.statusCode).toBe(400);
    expect(freeTextSearchSpy).not.toHaveBeenCalled();
  });

  test("should return the user list", async () => {
    const freeTextSearchSpy = jest.spyOn(usersRepository, "freeTextSearch");

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

    const text = "valid name";

    const response = await searchService.execute({
      queryStringParameters: {
        text,
      },
    });

    expect(response.statusCode).toBe(200);
    expect(freeTextSearchSpy).toHaveBeenCalledWith(text);
  });
});
