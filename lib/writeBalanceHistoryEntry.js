const supabase = require("./supaConnector");
const readDai = require("../lib/readDaiBalance");

const writeHistoryEntry = async (address) => {
  const amount = await readDai(address);

  const { data, error } = await supabase
    .from("pickle-history")
    .insert([{ amount: amount, address: address }]);

  if (error) console.log(error);

  return data;
};

module.exports = writeHistoryEntry;
