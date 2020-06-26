var fs = require("fs");

fs.readFile("Transactions2014.csv", function (err, data) {
  let transactionsData = data.toString();
  console.log(transactionsData);
});
