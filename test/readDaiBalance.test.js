const readDaiBalance = require("../lib/readDaiBalance");

test("read balance returns 0", async () => {
  expect(
    await readDaiBalance("0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511")
  ).toBe(0);
});
