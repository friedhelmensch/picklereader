const getUserInfo = require("./contracts/minichef");
const { getBalance, getTotalSupply } = require("./contracts/pickleJar");

const getShares = async (address) => {
  const userInfo = await getUserInfo(address);
  return userInfo.amount;
};

const getDaiAmount = async (shares) => {
  const balance = await getBalance();
  const totalSupply = await getTotalSupply();

  const lpTokens = (balance * shares) / totalSupply;
  return lpTokens;
};

module.exports = async (address) => {
  const shares = await getShares(address);
  const DAI = await getDaiAmount(shares);
  return DAI / 1e18;
};
