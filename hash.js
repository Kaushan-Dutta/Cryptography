const {createHash}=require('crypto');
const message='I love u';
const hashed=createHash('sha256').update(message).digest('hex');
console.log(hashed);