require("dotenv").config(".env");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "LostArk 성장 가이드 API",
      version: "1.0.0",
      description: "최적의 성장을 위한 가이드를 제공하는 API",
    },
    servers: [
      {
      url: `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
      }
    ]
  },
  schemes: ["http"],
  apis: ["./routes/*.js"]
};

module.exports = options;