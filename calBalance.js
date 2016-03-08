var randomNumber = require('./randomNumber.js');
var convertUSD = require('./convertUSD.js');

var accountBalance = "Account Balance: \n$";

var calBalance = function(){
    return convertUSD(randomNumber(100,1000000));

};

var accountText = function(){
  return accountBalance;
};

module.exports = calBalance;
module.exports.textBal = accountBalance;
