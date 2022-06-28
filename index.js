const express = require("express");


const app = express();
const port = 5000;
app.get("/", function (req, res) {
  res.send("GET request to homepage");
});

function add(numbers) {
  return numbers;
}

const removeDup = (name1) => {
  return name1;
};

exports.add = add;
exports.removeDup = removeDup;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
