//Imports
const msg = require("./message");

//Stub for choosing which database to send message to
function sortMsg(toSort){
    if(toSort.cityTag === "Ames"){
        console.log("Sending to Ames database");
    }
    else if(toSort.cityTag === "CdrR"){
        console.log("Sending to Cedar Rapids database");
    }
    else if(toSort.cityTag === "DesM"){
        console.log("Sending to Des Moines database");
    }
    else if(toSort.cityTag === "Chig"){
        console.log("Sending to Chicago database");
    }
    else{
        console.log("Unknown city tag message sort failed.");
    }
    
}

//Testing
const testMsg = Object.create(msg.Message);
testMsg.backAlleyConstructor("RedRadish",2387,"Who pulled the fire alarm in Willow",10,"Ames");

console.log(testMsg);
sortMsg(testMsg)