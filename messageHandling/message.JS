//Prototype
const Message = {
    senderName: "",
    senderId: 0,
    content: "",
    cordN: 0,
    cordS: 0,
    cordE: 0,
    cordW: 0
  };

  const test = Object.create(Message);
  test.senderName = "cyanMonkey112";
  test.senderID = 2742;
  test.content = "Does anyone know if seasons is good today?";

console.log(test.senderName)
console.log(test.senderID);
console.log(test.content);

  