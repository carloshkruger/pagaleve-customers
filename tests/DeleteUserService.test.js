const DeleteUserService = require("../src/services/DeleteUserService");
const FakeUsersRepository = require("./fakes/FakeUserRepository");

let deleteUserService;
let usersRepository = new FakeUsersRepository();

describe("DeleteUserService", () => {
  beforeEach(() => {
    deleteUserService = new DeleteUserService({ usersRepository });
  });

  test("should return an error if the userId is not provided", async () => {
    const response = await deleteUserService.execute({
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

    const response = await deleteUserService.execute({
      pathParameters: {
        userId: "123123",
      },
    });

    expect(response.statusCode).toBe(404);
  });

  test("should delete the user", async () => {
    jest.spyOn(usersRepository, "findById").mockImplementation(async () => ({
      id: new Date().getTime(),
      name: "valid name",
      email: "valid_email@email.com",
      createdAt: new Date().toISOString(),
    }));

    const response = await deleteUserService.execute({
      pathParameters: {
        userId: "123123",
      },
    });

    expect(response.statusCode).toBe(204);
  });
});
