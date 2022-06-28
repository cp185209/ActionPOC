const sample = require("./sample");

test("remove dup", async () => {
  console.log("in the test folder");
  pns = [{ type: "hello" }, { type: "hi" }];
  console.log(sample.removeDup(pns));
  expect(sample.removeDup(pns)).toBe("hello");

  const spy = jest
    .spyOn(sample, "removeDup")
    .mockImplementation((pns) => "test");

  const s = await sample.removeDup(pns);

  expect(spy).toHaveBeenCalled();

  expect(s).toEqual("test");

  spy.mockRestore();
});
