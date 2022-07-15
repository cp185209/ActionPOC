const axios = require("axios");

const call1 = async (mail) => {
  // const config = {
  //   method: "GET",
  //   url: "http://localhost:8080/Message/1",
  // };
  // const res = await axios(config);
  // console.log(res.data);

  const message = await axios.get("http://localhost:8080/Message/1");
  console.log(message.data);
  return "hello";
};
call1();
module.exports = { call1 };
