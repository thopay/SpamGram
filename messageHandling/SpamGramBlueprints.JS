//Prototype class of Message
const Message = {
    senderName: "",
    senderID: 0,
    content: "",
    likeCount: 0,
    cityTag: "",
    timeSent: 0,
    backAlleyConstructor: function (sName,sID,content,lCount,cityTag) {
      this.senderName = sName;
      this.senderID = sID;
      this.content = content;
      this.likeCount = lCount;
      this.cityTag = cityTag;
      this.timeSent = Date.now()
    }
  };
  const User = {
    name: "",
    userID: 0,
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
  module.exports = {Message};

  