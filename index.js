// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", (req, res) => {
  let date = req.params.date;
  let currentTime = new Date()
  let unixDate = null;
  let utcDate = null;
  //check if date is valid:
  // if (date is unix, assign to variable and use it to assign another variable converted to utc) - Convert with dateMilliseconds.toUTCString()
  let unixRegex = /^[0-9]+$/;
  if (unixRegex.test(date)) {
    unixDate = date;
    let dateMilliseconds = new Date(unixDate * 1000) //*1000 to convert to milliseconds
    utcDate = dateMilliseconds.toUTCString();
    
    
    return res.json({unix: unixDate, utc: utcDate})
  } 
    
  else if (!isNaN(Date.parse(date))) {
    unixDate = Date.parse(date);
    utcDate = date;
    return res.json({unix: unixDate, utc: utcDate})
  }

  else if (date == '' || date == null) {
    unixDate = Date.parse(currentTime);
    let dateMilliseconds = new Date(unixDate * 1000)
    utcDate = dateMilliseconds.toUTCString();
    return res.json({unix: unixDate, utc: utcDate})
  }

  else {
    return res.json({error: "Invalid Date"})
  }
})



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//converting to utc string:
let dateNow = new Date()
console.log(dateNow.toUTCString())