const express = require("express");
const cors = require("cors");
const port = 5000;
require("./Config/config");
const User = require("./Schema/User");
const Jwt = require("jsonwebtoken");
const jwtKey = "tests";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
