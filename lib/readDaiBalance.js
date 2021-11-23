const jarAbi = require("./abi/pickleJar");
const miniChefAbi = require("./abi/miniChefV2");

const Contract = require("web3-eth-contract");
Contract.setProvider("https://polygon-rpc.com");

const getShares = async (address) => {
  const miniChef = new Contract(
    miniChefAbi,
    "0x20b2a3fc7b13ca0ccf7af81a68a14cb3116e8749"
  );
  const userInfo = await miniChef.methods.userInfo("3", address).call();

  return userInfo.amount;
};

const getDaiAmount = async (shares) => {
  const pickleJar = new Contract(
    jarAbi,
    "0x0519848e57ba0469aa5275283ec0712c91e20d8e"
  );
  const balance = await pickleJar.methods.balance().call();
  const totalSupply = await pickleJar.methods.totalSupply().call();

  const lpTokens = (balance * shares) / totalSupply;
  return lpTokens;
};

module.exports = async (address) => {
  const shares = await getShares(address);
  const DAI = await getDaiAmount(shares);
  return DAI / 1e18;
};
