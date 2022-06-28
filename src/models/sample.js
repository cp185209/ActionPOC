const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sampleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    samplename: String,
    age: Number,
  },
  { timestamps: true }
);

const Sample = mongoose.model("Sample", sampleSchema);

module.exports = Sample;
