const supabase = require("../lib/supaConnector");

const getHistory = async (address) => {
  const { data, error } = await supabase
    .from("pickle-history")
    .select()
    .filter("address", "eq", address);

  if (error) console.log(error);

  return data.map((x) => {
    return {
      amount: x.amount,
      date: x.created_at,
    };
  });
};

module.exports = getHistory;
