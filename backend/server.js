const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://gaganjeet788_db_user:<gaganjeet31060506>@cluster0.3ydadaw.mongodb.net/");

const User = mongoose.model("User", {
  name: String
});

app.post("/users", async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.send(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});

