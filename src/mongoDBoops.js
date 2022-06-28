const mongoose = require("mongoose");

const sample = require("./models/sample");

const url =
  "mongodb+srv://cp185209:Chaithu123@cluster0.wpr1oxb.mongodb.net/test?retryWrites=true&w=majority";

const connect = () => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
      console.log("connected to db " + result);
    })
    .catch((error) => {
      "error";
    });
};
const saveSample = () => {
  const samplemongo = new sample({
    title: "conding burger",
    samplename: "nodejs",
    age: 98,
  });
  samplemongo.save().then((res) => {
    console.log("completed save ");
  });
};

const returnAllSamples = () => {
  return sample.find();
};

exports.returnAllSamples = returnAllSamples;
