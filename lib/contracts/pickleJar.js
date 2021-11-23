const jarAbi = require("../abi/pickleJar");

const Contract = require("web3-eth-contract");
Contract.setProvider("https://polygon-rpc.com");

const pickleJar = new Contract(
  jarAbi,
  "0x0519848e57ba0469aa5275283ec0712c91e20d8e"
);

const getBalance = async () => {
  const balance = await pickleJar.methods.balance().call();
  return balance;
};

const getTotalSupply = async () => {
  const totalSupply = await pickleJar.methods.totalSupply().call();
  return totalSupply;
};

module.exports = { getBalance, getTotalSupply };
