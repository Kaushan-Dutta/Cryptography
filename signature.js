const {createSign,createVerify}=require('crypto');
const {publicKey,privateKey}=require('keypair');
console.log(privateKey,publicKey);

const message='I love u';

const signer=createSign('rsa-sha256');
signer.update(message);
const signature=signer.sign('as840','hex');

const verifier=createVerify('rsa-sha256');
verifier.update(message);
const isVerified=verifier.verify(publicKey,sign,'hex');
console.log(isVerified);
