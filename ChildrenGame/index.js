var express = require('express');
var app = express();
app.use(express.static('public'));

var numberOfChildren;
var eliminationCount;

var createPlayers = function (number) {
  var array = [];
  for (var i = 0; i < number; i++) {
    array[i] = { id: i + 1, isEliminated: false };
  }
  return array;
}

var playGame = function (number, children, count){
 var eliminatedChildren = [];
 var j = 0;
 var k = 0;
 while (eliminatedChildren.length < (number - 1)) {
    if (j > (children.length - 1)) {
        j = 0;
    }
    if (children[j].isEliminated) {
        j++;
        continue;
    }
    k++;
    if ((k%count) === 0 &&
        !children[j].isEliminated) {
            children[j].isEliminated = true;
        eliminatedChildren.push(children[j].id);
        k = 0;
    }
    j++;
 }
 return eliminatedChildren;
}

var getWinner = function(children) {
  var lookup;
  for (var i = 0; i < children.length; i++) {
    if (children[i].isEliminated === false) {
      lookup = children[i].id;
    }
  }
  return lookup;
}

var childrenGame = function (number, count) {
  var arrayOfChildren = createPlayers(number);
  var eliminatedChildren = playGame(number, arrayOfChildren, count);
  var winner = getWinner(arrayOfChildren);
  return {
    eliminatedList: eliminatedChildren,
    winner: winner
  };
};

var result = childrenGame(numberOfChildren, eliminationCount);
console.log("Winner is: " + result.winner);
console.log("Eliminated: " + result.eliminatedList);


app.get('/childrengame', function (req, res) {
  var bodyObject = childrenGame(parseInt(req.query.number), parseInt(req.query.count));
  res.send(bodyObject);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
