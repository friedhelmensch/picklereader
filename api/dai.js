const readDai = require("../lib/read-dai");

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const { address } = req.query;
    var amount = await readDai(address);
    return res.status(200).send(amount);
  }
  if (req.method === "PUT") {
    return res.status(200).send("soon");
  }
  return res.status(400).send("not supported");
};
