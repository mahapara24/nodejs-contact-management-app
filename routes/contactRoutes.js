const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Get all the message" });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create a contact" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `get a contact for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update a contact for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete a contact for ${req.params.id}` });
});

module.exports = router;
