var express = require("express");
var app = express();
var port = process.env.PORT || 3000; // process.env reads environment variables. looks at enviro and sets port to 3000

app.use(express.static(__dirname + "/app/")); //app.use says filter everything through this before it touches any other endpoints. static allows me to serve static files. __dirname is  a shortcut to my current directory. essentially, this tells express that it will be serving files from the /app folder

function Adjective () {
  this.happy = true;
  this.grumpy = true;
  this.tall = true;
  this.silly = true;
};
var adjective = new Adjective();

function getRandomWord (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp}; //this is wrapped in curlys bc word is a new object
}

getRandomWord(adjective);

app.get("/", function (req, res) {
  res.send("Hello, Martians");
});

app.get("/adjective", function(req, res) {
  res.json(getRandomWord(adjective));
});

app.listen(port, function(){
  console.log('server started on port ' + port);
});

app.get("/", function(req, res){
  res.sendFile("index.html");
});


