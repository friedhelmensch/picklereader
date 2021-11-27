const { getHistory } = require("../../lib/history");

module.exports = async (req, res) => {
  console.log("high");
  if (req.method === "GET") {
    const { address } = req.query;
    var history = await getHistory(address);
    return res.status(200).send(history);
  }
  return res.status(400).send("not supported");
};
