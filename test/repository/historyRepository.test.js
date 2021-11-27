const {
  writeBalanceHistoryEntry,
  getBalanceHistory,
  deleteBalanceHistory,
} = require("../../lib/repository/historyRepository");

test("write entries and delete entries", async () => {
  const newEntry = await writeBalanceHistoryEntry(
    "0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511",
    900
  );
  expect(newEntry.amount).toBe(900);

  await writeBalanceHistoryEntry(
    "0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511",
    6547
  );
  const balanceHistory = await getBalanceHistory(
    "0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511"
  );
  expect(balanceHistory.length).toBe(2);

  await deleteBalanceHistory("0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511");

  const balanceHistoryAfterDelete = await getBalanceHistory(
    "0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511"
  );

  expect(balanceHistoryAfterDelete.length).toBe(0);
});
