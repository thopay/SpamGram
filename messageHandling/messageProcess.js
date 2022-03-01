
const http = require('http');

var fs = require('fs');
var text = fs.readFileSync("c:/se186/spamgram/bannedWords.txt", 'utf-8');
var bannedWords = text.split('\n');
for(var i =0; i<bannedWords.length;i++){
  bannedWords[i] = bannedWords[i].replace(/(\r\n|\n|\r| )/gm, "");
}
var testMsg = fs.readFileSync("c:/se186/spamgram/testMsg.txt", 'utf-8');


function filterMsg(msg){
   var endCons = [',','.','?',"!"];
   var  curLetter = '';
   var curWord = "";
   var newMsg ="";
   for(let i =0; i <msg.length; i ++){
      curLetter = msg[i];
      
      if(curLetter == ' ' || endCons.includes(curLetter)){
        var toAdd ="";
          if(bannedWords.includes(curWord.toLowerCase()) === true){
            for(var k =0; k < curWord.length; k++){
              toAdd += '*';
            }
          }
          else{
            toAdd = curWord;
          }
          
          toAdd += curLetter;
          newMsg += toAdd;
          curWord = "";
      }
      else{
        curWord += curLetter;
      }

   }
   return newMsg;

}
var test ="";
test = filterMsg(testMsg);
console.log(test);


/*
const server = http.createServer((req,res) => {
    if(req.url === '/notyikyak'){
        console.log('Found your house');
        res.write('I am living in your walls');
        res.end();
    }

});


server.listen(3000);

console.log('I am watching you sleep at night');
*/
/*  Stolen example code 
const https = require('https');
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


const https = require('https');
http.get('http:/localhost:3000/notyikyak', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
*/
