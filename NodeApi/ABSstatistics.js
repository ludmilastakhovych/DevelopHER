var express = require('express');
var request = require('request');
var syncRequest = require('sync-request');
var app = express();
app.use(express.static('public'));

app.get('/absapi', function (req, res) {
  request('http://www.abs.gov.au/api/demography/populationprojection', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var bodyObject = JSON.parse(body);
      res.send("Current population: "+ bodyObject.popNow); // Show the HTML for the ABS page.
    }
    else {
      res.send(error);
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
