const Settings = require("../models/scheduleSettings");
const Slot = require("../models/scheduleSlot");

const handleError = (res, error) => {
  res.status(500).json({ error });
};

// SETTINGS

const setSettings = async (req, res) => {
  await Settings.deleteMany({});
  const settings = new Settings(req.body);
  settings
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => handleError(res, error));
};

const getSettings = (req, res) => {
    Settings.find() 
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => handleError(res, error));
};

// SCHEDULE SLOTS



module.exports = {
    setSettings,
    getSettings,

  };
