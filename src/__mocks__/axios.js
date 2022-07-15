// import mockAxios from "jest-mock-axios";
// export default mockAxios;

module.exports = {
  get: jest
    .fn()
    .mockimplementationOnce(() => Promise.resolve({ data: "hell000o" })),
};
