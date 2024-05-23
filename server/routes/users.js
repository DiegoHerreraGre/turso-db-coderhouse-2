const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.send("Users list");
});

router.get("/new", (req, res) => {
  res.send("New user | Form");
});

router.post("/recieve", async (req, res) => {
  const userData = req.body;
  console.table(userData);
  users.push(userData);
  res.status(200).json({ message: "User added", userData });
});

router.get("/recieve", (req, res) => {
  res.send("User received");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`User ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`User ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`User ${req.params.id}`);
  });

const users = [];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
