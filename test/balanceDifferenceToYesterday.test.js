const readDaiBalance = require("../lib/readDaiBalance");
jest.mock("../lib/readDaiBalance");

const historyRepository = require("../lib/repository/historyRepository");
jest.mock("../lib/repository/historyRepository");

const currentBalance = 280;
const historicalBalance = 180;

readDaiBalance.mockResolvedValue(currentBalance);
historyRepository.getBalanceHistoryEntry.mockResolvedValue({
  amount: historicalBalance,
});

const getBalanceDifference = require("../lib/balanceDifferenceToYesterday");

test("get difference to yesterday returns 140", async () => {
  expect(
    await getBalanceDifference("0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511")
  ).toBe(currentBalance - historicalBalance);
});
