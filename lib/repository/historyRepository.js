const supabase = require("./supaConnector");

const getBalanceHistory = async (address) => {
  const { data, error } = await supabase
    .from("pickle-history")
    .select()
    .eq("address", address);
  //.gt("created_at", yesterday.toISOString())
  //.order("created_at", { ascending: true })
  //.limit(1);

  if (error) console.log(error);
  return data;
};

const writeBalanceHistoryEntry = async (address, amount, date) => {
  const { data, error } = await supabase.from("pickle-history").insert([
    {
      amount: amount,
      address: address,
      created_at: date || new Date().toISOString(),
    },
  ]);
  if (error) console.log(error);
  return data[0];
};

const deleteBalanceHistory = async (address) => {
  const { data, error } = await supabase
    .from("pickle-history")
    .delete()
    .match({ address: address });
  if (error) console.log(error);
  return data;
};

const getBalanceHistoryEntry = async (address, date) => {
  return {
    amount: 140,
  };
};

module.exports = {
  writeBalanceHistoryEntry,
  getBalanceHistory,
  deleteBalanceHistory,
  getBalanceHistoryEntry,
};
