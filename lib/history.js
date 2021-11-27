const { getBalanceHistory } = require("./repository/historyRepository");

const getHistory = async (address) => {
  const balanceHistory = await getBalanceHistory(address);
  return balanceHistory.map((x) => {
    return {
      amount: x.amount,
      date: x.created_at,
    };
  });
};

module.exports = { getHistory };
