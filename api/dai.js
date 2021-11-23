const readDai = require("../lib/readDaiBalance");
const writeDai = require("../lib/writeBalanceHistoryEntry");

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const { address } = req.query;
    var amount = await readDai(address);
    return res.status(200).send(amount);
  }
  if (req.method === "POST") {
    const address = req.body.address;
    const result = await writeDai(address);
    if (result) {
      return res.status(201).send(result);
    }
    return res.status(500);
  }
  return res.status(400).send("not supported");
};
