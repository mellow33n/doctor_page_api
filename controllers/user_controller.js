const User = require("../models/user");

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getUsers = (req, res) => {
  User.find() // return cursor - hasNext, next, forEach
    .sort({ lastName: 1 })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => handleError(res, error));
};
const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => handleError(res, error));
};
const deleteUserById = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => handleError(res, error));
};
const addUser = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => handleError(res, error));
};
const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => handleError(res, error));
};

module.exports = {
  getUsers,
  getUserById,
  deleteUserById,
  addUser,
  updateUser,
};
