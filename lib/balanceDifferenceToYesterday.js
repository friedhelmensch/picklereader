const readDaiBalance = require("./readDaiBalance");
const { getBalanceHistoryEntry } = require("./repository/historyRepository");

module.exports = async (address) => {
  const currentBalance = await readDaiBalance(address);
  const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  const { amount } = await getBalanceHistoryEntry(address, yesterday);
  return currentBalance - amount;
};
