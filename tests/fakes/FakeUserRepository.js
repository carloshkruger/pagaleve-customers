class FakeUsersRepository {
  async findByEmail() {
    return null;
  }

  async create() {}
}

module.exports = FakeUsersRepository;
