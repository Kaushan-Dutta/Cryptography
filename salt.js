const {scryptSync,randomBytes}=require('crypto');
function signup(message)
{
    const salt=randomBytes(16);
    const hashed=scryptSync(message,salt,64).toString('hex');
    console.log(hashed);
}
signup('I love u');