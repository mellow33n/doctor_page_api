const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user-routes");

const PORT = 7777;
const URL = 'mongodb://localhost:27017/doctor-page';

const app = express();
app.use(express.json());
app.use(userRoutes);

mongoose
    .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(`Error msg: ${error}`));

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port: ${PORT}`);
})
