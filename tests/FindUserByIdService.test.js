const FindUserByIdService = require("../src/services/FindUserByIdService");
const FakeUsersRepository = require("./fakes/FakeUserRepository");

let findUserByIdService;
let usersRepository = new FakeUsersRepository();

describe("findUserByIdService", () => {
  beforeEach(() => {
    findUserByIdService = new FindUserByIdService({ usersRepository });
  });

  test("should return an error if the userId is not provided", async () => {
    const response = await findUserByIdService.execute({
      pathParameters: {
        userId: "",
      },
    });

    expect(response.statusCode).toBe(400);
  });

  test("should return an error if the user was not found", async () => {
    jest
      .spyOn(usersRepository, "findById")
      .mockImplementation(async () => null);

    const response = await findUserByIdService.execute({
      pathParameters: {
        userId: "123123",
      },
    });

    expect(response.statusCode).toBe(404);
  });

  test("should return the user data if the user exists", async () => {
    jest.spyOn(usersRepository, "findById").mockImplementation(async () => ({
      id: new Date().getTime(),
      name: "valid name",
      email: "valid_email@email.com",
      createdAt: new Date().toISOString(),
    }));

    const response = await findUserByIdService.execute({
      pathParameters: {
        userId: "123123",
      },
    });

    expect(response.statusCode).toBe(200);
  });
});
