const { writeBalanceHistoryEntry } = require("./database/historyRepository");
const readDai = require("../lib/readDaiBalance");

const writeHistoryEntry = async (address) => {
  const amount = await readDai(address);
  const newEntry = writeBalanceHistoryEntry(address, amount);
  return newEntry;
};

module.exports = writeHistoryEntry;
