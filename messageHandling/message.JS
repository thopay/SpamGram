//Prototype class of Message
const Message = {
    senderName: "",
    senderID: 0,
    content: "",
    likeCount: 0,
    cityTag: "",
    backAlleyConstructor: function(sName,sID,content,lCount,cityTag){
      this.senderName = sName;
      this.senderID = sID;
      this.content = content;
      this.likeCount = lCount;
      this.cityTag = cityTag;
    }
  };
  
    

//Testing
  const test = Object.create(Message);
  test.senderName = "cyanMonkey112";
  test.senderID = 2742;
  test.content = "Does anyone know if seasons is good today?";


//Exports
  module.exports = {Message};

  