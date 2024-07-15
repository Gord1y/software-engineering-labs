const authenticator1 = require('./authenticator');
const authenticator2 = require('./authenticator');

authenticator1.authenticate();

console.log('Are both instances same?', authenticator1 === authenticator2);
