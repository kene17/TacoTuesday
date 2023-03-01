const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "ctfvygbuhnijm";
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const cookieParser = require("cookie-parser");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json()); //allows use to use req.body
app.use(cookieParser());
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://admin:WUWpihF5pFrAJaBT@cluster0.nzchcyr.mongodb.net/?retryWrites=true&w=majority"
);

const salt = bcrypt.genSaltSync(10);

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    console.log(err);
    res.status(400).json(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    //check username to know if it exists
    const userDoc = await User.findOne({ username });
    const isPassOk = bcrypt.compareSync(password, userDoc.password);
    //set a token and return a cookie
    if (isPassOk) {
      jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        return res.cookie("token", token).json({
          id: userDoc._id,
          username: username,
        });
      });
    } else {
      return res.status(400).json("wrong credentials");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

//if we're logged in we need to check the token inside the browser to know
app.get('/profile', (req, res)=>{
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    //we should only see the info if we're a verified user
    res.json(info);
  });
})

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.listen(4000);
