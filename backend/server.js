const express= require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerOption = require("./swagger/swagger");
const specs = swaggerJsdoc(swaggerOption)

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs, {explorer: true}));

// 라우터
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user")

app.use(
    cors({
        origin:`http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
        credentials:true
    })
);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// 라우터 연결
app.use("/", indexRouter);
app.use("/user", userRouter);

// listen
app.listen(process.env.SERVER_PORT, () => console.log(`server port : ${process.env.SERVER_PORT}`));