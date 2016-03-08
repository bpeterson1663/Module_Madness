var randomNumber = function(min, max){

  return Math.floor(Math.random() * (1 + max - min) + 1);
};

module.exports = randomNumber;
