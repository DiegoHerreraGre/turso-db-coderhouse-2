const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
app.use(cors(), logger);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
