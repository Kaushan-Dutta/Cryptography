const {createHmac}=require('crypto');
const message='I love u';
const key='abcxyz'
const hash=createHmac('sha256',key).update(message).digest('hex');
console.log(hash);