const express= require("express");
const app = express();
require("dotenv").config();

// 라우터
const indexRouter = require("./routes/index");
const getUserInfoRouter = require("./routes/getUserInfo");

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
app.use("/user", getUserInfoRouter);

// listen
app.listen(PORT, () => console.log(`server port : ${PORT}`));