const Slot = require("../models/scheduleSlot");

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getScheduleSlot = (req, res) => {
  Slot.find()
    .sort({ fullDate: 1 })
    .then((slots) => {
      res.status(200).json(slots);
    })
    .catch((error) => handleError(res, error));
};
const getScheduleSlotByID = (req, res) => {
  Slot.findById(req.params.id)
    .then((slot) => {
      res.status(200).json(slot);
    })
    .catch((error) => handleError(res, error));
};
const deleteScheduleSlotByID = (req, res) => {
  Slot.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => handleError(res, error));
};
const addScheduleSlot = async (req, res) => {
  const slot = new Slot(req.body);
  slot
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => handleError(res, error));
};
const updateScheduleSlot = (req, res) => {
  Slot.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => handleError(res, error));
};

module.exports = {
  getScheduleSlot,
  getScheduleSlotByID,
  deleteScheduleSlotByID,
  addScheduleSlot,
  updateScheduleSlot,
};
