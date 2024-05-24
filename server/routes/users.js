const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.render("users", { List: users });
});

router.get("/new", (req, res) => {
  res.send("New user | Form");
});

router.post("/recieve", async (req, res) => {
  let userData = req.body;
  console.table(userData);
  users.push(userData);
  res.status(200).json({ message: "User added", userData });
});

router.get("/recieve", (req, res) => {
  res.send("Users recieved");
});

router
  .route("/update")
  .get((req, res) => {
    res.render("update", { List: users });
  })
  .put("/update", async (req, res) => {
    await updateUser(req, res);
    const userEmail = req.query.email;
    const index = users.findIndex((u) => u.email === userEmail);
    if (index !== -1) {
      const updatedUser = {
        ...users[index],
        ...req.body,
      };
      users[index] = updatedUser;
      res
        .status(200)
        .json({ message: "Usuario actualizado con éxito", updatedUser });
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  });

  async function updateUser(button) {
  const userEmail = button.getAttribute('data-email');
  const formData = new FormData(document.querySelector('form'));
  const userData = Object.fromEntries(formData.entries());

  fetch(`/users/update?email=${userEmail}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}

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
