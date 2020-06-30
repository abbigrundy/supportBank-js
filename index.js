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
    //console.log(item);

    // take an proposed user already in the user array
    let user1 = item[1];

    let user2 = item[2];

    // check too see if that user string, matches a string of the existing users
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
  console.log(usersArray);

  const users = usersArray.map(function (name) {
    return {
      name: name,
      balance: 0,
    };
  });
  console.log(users);
});
