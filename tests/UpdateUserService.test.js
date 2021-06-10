const UpdateUserService = require("../src/services/UpdateUserService");
const FakeUsersRepository = require("./fakes/FakeUserRepository");

let updateUserService;
let usersRepository = new FakeUsersRepository();

describe("UpdateUserService", () => {
  beforeEach(() => {
    updateUserService = new UpdateUserService({ usersRepository });
  });

  test("should return an error if the userId is not provided", async () => {
    const response = await updateUserService.execute({
      pathParameters: {
        userId: "",
      },
      body: JSON.stringify({
        name: "valid user",
        email: "validemail@mail.com",
      }),
    });

    expect(response.statusCode).toBe(400);
  });

  test("should return an error if the name is not provided", async () => {
    const response = await updateUserService.execute({
      pathParameters: {
        userId: "123123",
      },
      body: JSON.stringify({
        name: "",
        email: "validemail@mail.com",
      }),
    });

    expect(response.statusCode).toBe(400);
  });

  test("should return an error if the email is not provided", async () => {
    const response = await updateUserService.execute({
      pathParameters: {
        userId: "123123",
      },
      body: JSON.stringify({
        name: "valid name",
        email: "",
      }),
    });

    expect(response.statusCode).toBe(400);
  });

  test("should return an error if the user was not found", async () => {
    jest
      .spyOn(usersRepository, "findById")
      .mockImplementation(async () => null);

    const response = await updateUserService.execute({
      pathParameters: {
        userId: "123123",
      },
      body: JSON.stringify({
        name: "valid user",
        email: "validemail@mail.com",
      }),
    });

    expect(response.statusCode).toBe(404);
  });

  test("should return the user data if the user was updated", async () => {
    jest.spyOn(usersRepository, "findById").mockImplementation(async () => ({
      id: new Date().getTime(),
      name: "valid name",
      email: "valid_email@email.com",
      createdAt: new Date().toISOString(),
    }));

    const response = await updateUserService.execute({
      pathParameters: {
        userId: "123123",
      },
      body: JSON.stringify({
        name: "valid user",
        email: "validemail@mail.com",
      }),
    });

    expect(response.statusCode).toBe(200);
  });
});
