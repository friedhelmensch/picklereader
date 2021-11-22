const supabase = require("../lib/supaConnector");
const readDai = require("../lib/read-dai");

const writeDai = (address) => {
  const amount = await readDai(address);

  const { insertData, insertError } = await supabase
    .from("pickle-history")
    .insert([{ amount: amount, address: address }]);

  return insertData;
};
