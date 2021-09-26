const express = require('express');
const path = require('path');

// express app
const app = express();

// serve static files
app.use(express.static(path.join(__dirname, './app/build')));

// global variables
const PORT = process.env.PORT || 3001;
const NAMES = ["Bob", "Billy", "Tom", "John", "Michael", "Ben"]


// endpoint
app.get("/api", function (req, res) {

  // get a name
  var name = NAMES[Math.floor(Math.random()*NAMES.length)];

  res.json({ name: name });
});

// endpoint
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, './app/build', 'index.html'));
});

// listen
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});