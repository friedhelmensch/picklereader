const { getYesterdaysBalance } = require("../lib/history");

test("get difference to yesterday returns 140", async () => {
  expect(
    await getYesterdaysBalance("0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511")
  ).toBe(140);
});
