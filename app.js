const express = require("express");
const cors = require("cors");
const userRoutes = require('./routes/UserRoutes')

require("dotenv").config();
const app = express();



app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes)


app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});