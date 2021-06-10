const dynamoose = require("dynamoose");
const Schema = dynamoose.Schema;

const schema = new Schema({
  id: {
    type: String,
    required: true,
    hashKey: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

const model = dynamoose.model(process.env.DYNAMODB_USERS_TABLE, schema);

module.exports = model;
