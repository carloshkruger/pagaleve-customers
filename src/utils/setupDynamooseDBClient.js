const dynamoose = require("dynamoose");

function setupDynamooseDBClient() {
  if (!process.env.IS_LOCAL) {
    return;
  }

  const host = process.env.LOCALSTACK_HOST;
  const port = process.env.DYNAMODB_PORT;

  dynamoose.aws.ddb.local(`http://${host}:${port}`);
}

module.exports = setupDynamooseDBClient;
