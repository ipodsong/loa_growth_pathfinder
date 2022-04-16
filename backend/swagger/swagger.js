const swaggerAutogen = require("swagger-autogen")();
require("dotenv").config(".env");

const doc = {
  info: {
    title: "LostArk 성장 가이드 API",
    description: "최적의 성장을 위한 가이드를 제공하는 API",
  },
  host: `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
  schemes: ["http"],
};

const outputFile = "./swagger/swagger-output.json";
const endpointsFiles = [
  "./server.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc);