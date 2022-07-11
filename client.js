const axios = require("axios");
const { response } = require("express");
axios.get("http://localhost:8080/Message").then((response) => {
  console.log(response.data);

  const h = {
    name: "chaithanya",
    age: "26",
  };

  console.log(JSON.stringify(h));
});
