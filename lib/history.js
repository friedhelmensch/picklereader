const supabase = require("../lib/supaConnector");

const getHistory = async (address) => {
  //const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);

  const { data, error } = await supabase
    .from("pickle-history")
    .select()
    .eq("address", address);
  //.gt("created_at", yesterday.toISOString())
  //.order("created_at", { ascending: true })
  //.limit(1);

  if (error) console.log(error);

  return data.map((x) => {
    return {
      amount: x.amount,
      date: x.created_at,
    };
  });
};

const getYesterdaysBalance = (address) => 140;
module.exports = { getHistory, getYesterdaysBalance };
