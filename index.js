var fs = require("fs");

fs.readFile("Transactions2014.csv", function (err, data) {
  let transactionsData = data.toString();

  //store all single lined transactions
  let transactionsDataArray = transactionsData.split("\n");
  let existingArray = [];
  let usersArray = [];
  //find the users in the transactionsDataArray
  for (i = 1; i < transactionsDataArray.length; i++) {
    let item = transactionsDataArray[i].split(",");

    let user1 = item[1];

    let user2 = item[2];

    if (!usersArray.includes(user1)) {
      // if it does not  match
      usersArray.push(user1);
    }

    if (!usersArray.includes(user2)) {
      // if it does not  match
      usersArray.push(user2);
    }
  }
  // convert array of users into an array of accounts(object)
  const users = usersArray.map(function (name) {
    return {
      name: name,
      balance: 0,
    };
  });

  // get all users from the from section
  for (i = 1; i < transactionsDataArray.length; i++) {
    let item = transactionsDataArray[i].split(",");
    let from = item[1];
    let to = item[2];
    let amount = parseFloat(item[4]);

    const payer = users.find(function (user) {
      if (from === user.name) {
        return true;
      } else {
        return false;
      }
    });

    payer.balance = payer.balance - amount;

    const receiver = users.find(function (user) {
      if (to === user.name) {
        return true;
      } else {
        return false;
      }
    });

    receiver.balance = receiver.balance + amount;
  }
  console.log(users);
});
