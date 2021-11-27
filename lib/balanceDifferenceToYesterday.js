const readDaiBalance = require("./readDaiBalance");
const { getYesterdaysBalance } = require("./history");

module.exports = async (address) => {
  const currentBalance = readDaiBalance(address);
  const yesterdaysBalance = getYesterdaysBalance(address);
  return currentBalance - yesterdaysBalance;
};
