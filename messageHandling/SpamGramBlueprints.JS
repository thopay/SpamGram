//Prototype class of Message
class Message  {
    constructor(sName,sID,content,lCount,cityTag) {
      this.senderName = sName;
      this.senderID = sID;
      this.content = content;
      this.likeCount = lCount;
      this.cityTag = cityTag;
      this.timeSent = Date.now()
    }
  };
class User  {
  constructor(getUserName,getPhoneNumber,getPasswordHash,messagesArr) {
    this.userName = getUserName;
    this.phoneNumber = getPhoneNumber;
    this.passwordHash = getPasswordHash;
    this.messageHistory =  messagesArr
  }

}
  
    

//Testing
  const test = Object.create(Message);
  test.senderName = "cyanMonkey112";
  test.senderID = 2742;
  test.content = "Does anyone know if seasons is good today?";


//Exports
  module.exports = {Message};
  module.exports = {User};

  