const miniChefAbi = require("../abi/miniChefV2");
const Contract = require("web3-eth-contract");
Contract.setProvider("https://polygon-rpc.com");

const getUserInfo = async (address) => {
  const miniChef = new Contract(
    miniChefAbi,
    "0x20b2a3fc7b13ca0ccf7af81a68a14cb3116e8749"
  );
  const userInfo = await miniChef.methods.userInfo("3", address).call();
  return userInfo;
};

module.exports = getUserInfo;
