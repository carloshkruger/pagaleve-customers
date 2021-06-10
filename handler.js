"use strict";

module.exports.hello = async (event) => {
  try {
    const { name, email } = JSON.parse(event.body);

    return {
      statusCode: 201,
      body: JSON.stringify({
        name,
        email,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
    };
  }
};
