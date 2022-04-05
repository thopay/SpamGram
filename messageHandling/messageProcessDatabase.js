//Imports
const SGBP = require("./SpamGramBlueprints.JS");
const crypto = require('crypto')

var mockUserNameDataBase = {
    redRadish : crypto.createHash('sha512').update('gamer123').digest('hex'),
    JohnCenaFan : "test",
    DemonSlayer23 : "test"

}
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
function sortChatRoom(name,data){l
    //Code to get the list of messages from chatroom here 
    unSortedMSg = data.slice(0)
    sortedMsg = []
    newData = sortChatRoomProg(sorted,unSorted)

    //Temporary for test purposes this will interact with the database soon 
    return newData

}
function sortChatRoomByLike(sorted,unSorted){  
    
    toPlace = unSorted[0] 
    unSorted.splice(0,1)
        if(sorted.length === 0){
            sorted = [toPlace]
        }
        uLen = unSorted.length
        for(let k =0; k<uLen; k+=1){
            //console.log(unSorted)
            //console.log(sorted)
            toPlace = unSorted[k]
           //unSorted.splice(0,1)
            sLen = sorted.length
            for(let i =0; i<sLen; i+=1){
                currentPlace = sorted[i]
                if(currentPlace.likeCount < toPlace.likeCount){
                    secondHalf = sorted.splice(i)
                    sorted.push(toPlace)
                    sorted.push(...secondHalf)
                    i += sLen +5
                }
                else if (i == sLen -1){
                    sorted.push(toPlace)
    
                }
            }
        }
        return sorted
        
    }
    function sortChatRoomByTime(sorted,unSorted){  
    
        toPlace = unSorted[0] 
        unSorted.splice(0,1)
            if(sorted.length === 0){
                sorted = [toPlace]
            }
            uLen = unSorted.length
            for(let k =0; k<uLen; k+=1){
                //console.log(unSorted)
                //console.log(sorted)
                toPlace = unSorted[k]
               //unSorted.splice(0,1)
                sLen = sorted.length
                for(let i =0; i<sLen; i+=1){
                    currentPlace = sorted[i]
                    if(currentPlace.timeSent < toPlace.timeSent){
                        secondHalf = sorted.splice(i)
                        sorted.push(toPlace)
                        sorted.push(...secondHalf)
                        i += sLen +5
                    }
                    else if (i == sLen -1){
                        sorted.push(toPlace)
        
                    }
                }
            }
            return sorted
            
        }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }  
  
    //Needs to be client side
    function checkLogin(userName,password){
        if(userName in mockUserNameDataBase){
           passHashDataBase = mockUserNameDataBase[userName]
           passHashGiven = crypto.createHash('sha512').update(password).digest('hex');
           if(passHashDataBase ===  passHashGiven){
                //Log them into there account 
               console.log("Logging in")
           }
           else{
               //Tell them the login is incorrect
               console.log("Incorrect login")
           }
        }
        else{
            console.log("Incorrect login")
        }
        //Check if there is a username in the database 
            //Represented as a dictionary for now
    }



//Testing

testArr = []
for (let i =0; i<50; i++){
    const temp = new SGBP.Message("Test User" ,1000+i,"This is a test",getRandomInt(100),"Ames")
    testArr.push(temp)
    

}
testArrSend =[]
testArrSend =  sortChatRoomByTime(testArrSend,testArr)

console.log(testArrSend)