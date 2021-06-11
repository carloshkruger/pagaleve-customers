const CreateUserService = require("../src/services/CreateUserService");
const FakeUsersRepository = require("./fakes/FakeUserRepository");

let createUserService;
let usersRepository = new FakeUsersRepository();

describe("CreateUserService", () => {
  beforeEach(() => {
    createUserService = new CreateUserService({ usersRepository });
  });

  test("should return an error if the name is not provided", async () => {
    const response = await createUserService.execute({
      body: JSON.stringify({
        name: "",
        email: "validemail@mail.com",
      }),
    });

    expect(response.statusCode).toBe(400);
  });

  test("should return an error if the email is not provided", async () => {
    const response = await createUserService.execute({
      body: JSON.stringify({
        name: "valid name",
        email: "",
      }),
    });

    expect(response.statusCode).toBe(400);
  });

  test("should return an error if the email provided is already in use", async () => {
    const findByEmailSpy = jest.spyOn(usersRepository, "findByEmail");

    jest
      .spyOn(usersRepository, "findByEmail")
      .mockImplementation(async () => ({}));

    const email = "email_already_in_use@email.com";

    const response = await createUserService.execute({
      body: JSON.stringify({
        name: "valid name",
        email,
      }),
    });

    expect(response.statusCode).toBe(409);
    expect(findByEmailSpy).toHaveBeenCalledWith(email);
  });

  test("should return an error if the repository throws", async () => {
    jest.spyOn(usersRepository, "findByEmail").mockImplementation(async () => {
      throw new Error();
    });

    const response = await createUserService.execute({
      body: JSON.stringify({
        name: "valid name",
        email: "valid_email@email.com",
      }),
    });

    expect(response.statusCode).toBe(500);
  });

  test("should success if the valid values are provided", async () => {
    const findByEmailSpy = jest.spyOn(usersRepository, "findByEmail");
    const createSpy = jest.spyOn(usersRepository, "create");

    jest
      .spyOn(usersRepository, "findByEmail")
      .mockImplementation(async () => null);

    const email = "valid_email@email.com";

    const response = await createUserService.execute({
      body: JSON.stringify({
        name: "valid name",
        email,
      }),
    });

    expect(response.statusCode).toBe(201);
    expect(findByEmailSpy).toHaveBeenCalledWith(email);
    expect(createSpy).toHaveBeenCalled();
  });
});
