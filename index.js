var fs = require("fs");

fs.readFile("Transactions2014.csv", function (err, data) {
  let transactionsData = data.toString();

  //store all single lined transactions
  let transactionsDataArray = transactionsData.split("\n");

  let users = [];
  //find the users in the transactionsDataArray
  for (i = 0; i < transactionsDataArray.length; i++) {
    let firstItem = transactionsDataArray[i].split(",");
    console.log(firstItem);

    let user1 = firstItem[1];
    let user2 = firstItem[2];
    users.push(user1, user2);
  }
  console.log(users);
});
