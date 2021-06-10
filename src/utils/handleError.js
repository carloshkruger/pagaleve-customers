const AppError = require("./AppError");

module.exports = (error) => {
  if (error instanceof AppError) {
    return {
      statusCode: error.statusCode,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }

  return {
    statusCode: 500,
    body: JSON.stringify({
      error: "Internal server error",
    }),
  };
};
