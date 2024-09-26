import express from "express";
const app = express();
const port = 3000;
app.use(express.static("dist"));
app.listen(port, () => {
    console.log(`http服务已运行在${port}端口`);
});