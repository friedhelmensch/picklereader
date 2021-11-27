const readDaiBalance = require("../lib/readDaiBalance");
jest.mock("../lib/readDaiBalance");
readDaiBalance.mockResolvedValue(280);

const getBalanceDifference = require("../lib/balanceDifferenceToYesterday");

test("get difference to yesterday returns 140", async () => {
  expect(
    await getBalanceDifference("0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511")
  ).toBe(140);
});
