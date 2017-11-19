const twilio = require('twilio');

const accountSid = 'AC96ceaea5f6a74bac6f5a592401a60d66';
const authToken = '6b18b399beeb67f038caa3f254184a72';

module.exports = new twilio.Twilio(accountSid, authToken);
