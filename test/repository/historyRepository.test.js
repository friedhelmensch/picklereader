const {
  writeBalanceHistoryEntry,
  getBalanceHistory,
  deleteBalanceHistory,
  getBalanceHistoryEntry,
} = require("../../lib/repository/historyRepository");

test("write entries and delete entries", async () => {
  const testAddress = "0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511";

  const newEntry = await writeBalanceHistoryEntry(testAddress, 900);
  expect(newEntry.amount).toBe(900);

  await writeBalanceHistoryEntry(testAddress, 6547);
  const balanceHistory = await getBalanceHistory(testAddress);
  expect(balanceHistory.length).toBe(2);

  await deleteBalanceHistory(testAddress);

  const balanceHistoryAfterDelete = await getBalanceHistory(testAddress);

  expect(balanceHistoryAfterDelete.length).toBe(0);
});

test("write 3 entries 2 hours apart and get one in the middle", async () => {
  const testAddress = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

  const twentyOne = new Date(new Date().getTime() - 21 * 60 * 60 * 1000);
  const twentythree = new Date(new Date().getTime() - 23 * 60 * 60 * 1000);
  const twentyFive = new Date(new Date().getTime() - 25 * 60 * 60 * 1000);

  const twentyFour = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);

  await writeBalanceHistoryEntry(testAddress, 900, twentyOne);

  const secondEntry = await writeBalanceHistoryEntry(
    testAddress,
    6547,
    twentythree
  );

  await writeBalanceHistoryEntry(testAddress, 999, twentyFive);

  const entry = await getBalanceHistoryEntry(testAddress, twentyFour);

  expect(entry).toMatchObject(secondEntry);

  //clean up
  await deleteBalanceHistory(testAddress);
});
