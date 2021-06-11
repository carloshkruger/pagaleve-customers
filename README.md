<h1 align="center">
    Pagaleve Customers
</h1>

Serverless application for a Customers API running on AWS infrastructure using Lambda and DynamoDB.
There is a Insomnia config file (Insomnia_requests_config) on the project root folder that has all API endpoints. It can be useful to test the local project and the API in production on AWS.
Each service (Lambda and DynamoDB) has monitoring and logging.
There is a CI/CD pipeline using GitHub actions. Each time a push is made to the master branch, the action is triggered, tests are executed, and then deployed to AWS.

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

# run tests and generate a coverage report
npm run test:cov

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
