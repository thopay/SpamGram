//Imports
const msg = require("./message");

//Stub for choosing which database to send message to
function sortMsgLoc(toSort){
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
function updateChatRoom(geoTag){
    //Get all messages from the database for this tag 
    //Send to user
}
function sortChatRoom(name,data){
    //Code to get the list of messages from chatroom here 
    unSortedMSg = data.slice(0)
    sortedMsg = []
    newData = sortChatRoomProg(sorted,unSorted)

    //Temporary for test purposes this will interact with the database soon 
    return newData

}
function sortChatRoomProg(sorted,unSorted){  
    console.log(unSorted)
    console.log(sorted)  
    if(unSorted.length === 0){
        return (sorted);
    }
    
    else{
        toPlace = unSorted[0]
        unSorted.splice(0,1)
        if(sorted.length === 0){
            sorted = [toPlace]
        }
        else{
            sLen = sorted.length
        for(let i =0; i<sLen; i+=1){
                currentPlace = sorted[i]
                if(currentPlace.likeCount < toPlace.likeCount){
                    secondHalf = sorted.splice(i)
                    sorted.push(toPlace)
                    sorted.push(...secondHalf)
                    i += sLen +5
                }
                else{
                    sorted.push(toPlace)
                }
            }
        }
        sortChatRoomProg(sorted,unSorted)
    }
}


//Testing
const msg1 = Object.create(msg.Message);
msg1.backAlleyConstructor("msg1",2387,"Who pulled the fire alarm in Willow",10,"NwYk");
const msg2 = Object.create(msg.Message);
msg2.backAlleyConstructor("msg2",2387,"Who pulled the fire alarm in Willow",5,"NwYk");
const msg3 = Object.create(msg.Message);
msg3.backAlleyConstructor("msg3",2387,"Who pulled the fire alarm in Willow",20,"NwYk");

var testArr = [msg1,msg2,msg3]
var testArrFinal = []
console.log(sortChatRoomProg(testArrFinal,testArr))
//console.log(testArrSend)