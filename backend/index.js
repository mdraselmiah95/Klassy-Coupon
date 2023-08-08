const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Klassy is Running");
});

app.listen(PORT, () => {
  console.log(`Klassy is Running on port ${PORT}`);
});
