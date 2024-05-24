const express = require("express");
const router = express.Router();
const users = [];

router.use(express.json());

router.get("/", (req, res) => {
  res.render("users", { List: users });
});

router.get("/new", (req, res) => {
  res.send("New user | Form");
});

router
  .route("/recieve")
  .post(async (req, res) => {
    let userData = req.body;
    console.table(userData);
    users.push(userData);
    res.status(200).json({ message: "User added", userData });
  })
  .get((req, res) => {
    res.send("Users recieved");
  });

router
  .route("/update")
  .get((req, res) => {
    res.render("update", { List: users });
  })
  .put(async (req, res) => {
    const userEmail = req.query.email;
    const index = users.findIndex((u) => u.email === userEmail);
    if (index !== -1) {
      users[index] = { ...users[index], ...req.body };
      res.status(200).json({
        message: "Usuario actualizado con éxito",
        updatedUser: users[index],
      });
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  })
  .delete((req, res) => {
    const userEmail = req.query.email;
    const index = users.findIndex((u) => u.email === userEmail);
    if (index !== -1) {
      users.splice(index, 1); // Elimina el usuario del arreglo
      res.status(200).json({ message: "Usuario eliminado con éxito" });
    } else {
      res.status(404).send("Usuario no encontrado");
    }
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

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
