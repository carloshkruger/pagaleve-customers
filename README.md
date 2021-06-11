<h1 align="center">
    Pagaleve Customers
</h1>

Serverless application for a Customers API.

To run the application you must have installed:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Init the project

```bash
# clone the repository
git clone https://github.com/carloshkruger/pagaleve-customers.git

# enter the project folder
cd pagaleve-customers

# install the dependencies
npm install

# create the docker instance with the localstack
docker-compose up -d

# init the project
npm run start

```

### Another commands

```bash
# run tests
npm run test

```


### Application features

- Create user
- Update user
- Find user
- Delete user
- List users
- Free text search across all user fields

### Technologies

- [Node.js](https://nodejs.org/)
- [Serverless Framework](https://www.serverless.com/)
- [LocalStack](https://localstack.cloud/)
- [Dynamoose](https://dynamoosejs.com/)
- [Jest](https://jestjs.io/)
