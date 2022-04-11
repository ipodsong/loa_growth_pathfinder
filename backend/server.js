const express= require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();

// 라우터
const indexRouter = require("./routes/index");

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

// listen
app.listen(process.env.SERVER_PORT, () => console.log(`server port : ${process.env.SERVER_PORT}`));