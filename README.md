<h1 align="center">
    Pagaleve Customers
</h1>

<p>Serverless application for a Customers API running on AWS infrastructure using Lambda and DynamoDB.<p>
<p>There is a Insomnia config file (Insomnia_requests_config) on the project root folder that has all API endpoints. It can be useful to test the local project and the API in production on AWS.</p>
<p>Each service (Lambda and DynamoDB) has monitoring and logging.</p>
<p>There is a CI/CD pipeline using GitHub actions. Each time a push is made to the master branch, the action is triggered, tests are executed, and then deployed to AWS.</p>

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

The current production URL is https://78pohtj9pi.execute-api.us-east-1.amazonaws.com/dev

- Create user (POST /users)
- Update user (PUT /users)
- Find user (GET /users/:id)
- Delete user (DELETE /users/:id)
- List users (GET /users)
- Free text search across all user fields (GET /search?text=)

### Technologies

- [Node.js](https://nodejs.org/)
- [Serverless Framework](https://www.serverless.com/)
- [LocalStack](https://localstack.cloud/)
- [Dynamoose](https://dynamoosejs.com/)
- [Jest](https://jestjs.io/)
