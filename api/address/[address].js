const { getHistory } = require("../../lib/balanceHistory");

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const { address } = req.query;
    var history = await getHistory(address);
    return res.status(200).send(history);
  }
  return res.status(400).send("not supported");
};
