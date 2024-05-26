
const User = require("../models/user");

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getLogin = async (req, res) => {
  console.log(req);
  const getUserByTel = await User.find({ tel: `${req.body.tel}` }).then(
    (result) => result
  );
  const isUser = getUserByTel[0] ? true : false;
  const isCorrectPassword =
    getUserByTel[0]?.password === req.body.password ? true : false;


  if (!getUserByTel[0]) {
    const errMsg =
      "Облікова запис не існує. Перевірьте дані або зареєструйтесь";
    return handleError(res, errMsg);
  }

  if (isUser && isCorrectPassword) {
    return res.status(201).json(getUserByTel[0]);
  }
  if (isUser || isCorrectPassword) {
    const errMsg = "Телефон або пароль введено не вірно";
    return handleError(res, errMsg);
  } else {
    const errMsg =
      "Облікова запис не інсує. Перевірьте дані або зареєструйтесь";
    return handleError(res, errMsg);
  }
};

module.exports = {
  getLogin,
};
