const accountSid = 'AC70a17ad6de7fc51f540b63e799a335e5'; // Your Account SID from www.twilio.com/console
const authToken = 'acb92be943ba44fe8f09a2a420107d3d'; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.verify.services('VAb738f698a9de943208e9af873d4a0026')
    .verifications
    .create({ to: '+15017122661', channel: 'sms' })
    .then(verification => console.log(verification));


// client.messages
//     .create({
//         body: 'Hello from Node',
//         to: '+18159058433', // Text this number
//         from: '+17579938162', // From a valid Twilio number
//     })
//     .then((message) => console.log(message.sid));