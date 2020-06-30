var fs = require("fs");

fs.readFile("Transactions2014.csv", function (err, data) {
  let transactionsData = data.toString();

  //store all single lined transactions
  let transactionsDataArray = transactionsData.split("\n");
  let usersArray = [];
  //find the users in the transactionsDataArray
  for (i = 1; i < transactionsDataArray.length; i++) {
    let item = transactionsDataArray[i].split(",");

    let user1 = item[1];

    let user2 = item[2];

    if (!usersArray.includes(user1)) {
      usersArray.push(user1);
    }

    if (!usersArray.includes(user2)) {
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
  // this is for all users balance
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
  // let you find the balance for jon a

  let oneUser = users.find(function (user) {
    if (user.name === usersArray[0]) {
      return true;
    } else {
      return false;
    }
  });

  console.log(oneUser);

  // TODO:
  // List all transcations for Jon A
  // Have the array of transactions
  //
  // Given I want to check a certain user
  // I want to find that user from the user array.
  // I then want to see all of the users transactions
});
