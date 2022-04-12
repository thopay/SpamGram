//Prototype class of Message
const Message = {
    senderName: "",
    messageID: 0,
    content: "",
    long: 0,
    lat: 0,
    likeCount: 0,
    timeSent: 0,
    backAlleyConstructor: function (sName,mID,content,lCount,long,lat,timeCreated) {
      this.senderName = sName;
      this.senderID = sID;
      this.content = content;
      this.likeCount = lCount;
      this.cityTag = cityTag;
      this.timeSent =timeCreated
    }
  };

  const User = {
    name: "",
    userID: 0,
    color: 0,
    emoji: 0,
    phoneNumber: "",
    backAlleyConstructor: function (getName,getUserID,getPhoneNumber) {
     this.name = getName
     this.userID = getUserID
     this.phoneNumber = getPhoneNumber
    }
  };
  
    

//Testing
  const test = Object.create(Message);
  test.senderName = "cyanMonkey112";
  test.senderID = 2742;
  test.content = "Does anyone know if seasons is good today?";


//Exports
  module.exports = {Message,User};

  