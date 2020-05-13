// server.js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 9090;

app.get("/", (req, res) => {
  res.send(`
    <h1>Docker + Node</h1>
    <span>A match made in the cloud (Created by Jasim Juwel) Year 2020</span>
  `);
});

app.listen(PORT, () => {	
  console.log(`Server listening on port ${PORT}...`);
});
