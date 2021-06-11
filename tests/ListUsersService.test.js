const ListUsersService = require("../src/services/ListUsersService");
const FakeUsersRepository = require("./fakes/FakeUserRepository");

let listUsersService;
let usersRepository = new FakeUsersRepository();

describe("UpdateUserService", () => {
  beforeEach(() => {
    listUsersService = new ListUsersService({ usersRepository });
  });

  test("should return an error if the repository throws", async () => {
    jest.spyOn(usersRepository, "findAll").mockImplementation(async () => {
      throw new Error();
    });

    const response = await listUsersService.execute();

    expect(response.statusCode).toBe(500);
  });

  test("should return the user data if the user was updated", async () => {
    jest.spyOn(usersRepository, "findAll").mockImplementation(async () => [
      {
        id: new Date().getTime(),
        name: "valid name",
        email: "valid_email@email.com",
        createdAt: new Date().toISOString(),
      },
    ]);

    const response = await listUsersService.execute();

    expect(response.statusCode).toBe(200);
  });
});
