const {createCipheriv,randomBytes,createDecipheriv}=require('crypto');
const message='I love u';
const key=randomBytes(32);
const iv=randomBytes(16);

const cipher=createCipheriv('aes256',key,iv,64);
const encrypt=cipher.update(message,'utf8','hex')+cipher.final('hex');
console.log(encrypt);

const decipher=createDecipheriv('aes256',key,iv,64);
const decrypt=decipher.update(encrypt,'hex','utf8')+decipher.final('utf8');
console.log(decrypt);