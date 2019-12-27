const Wallet = require('ethereumjs-wallet'),
       fs = require('fs');


const utcFile = "./UTC--2019-12-27T02-53-32.779Z--6f1fbd182ed78xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
const password = "MY_PASSWORD"


const myWallet = Wallet.fromV3(fs.readFileSync(utcFile).toString(), password, true);

console.log("Private Key: " + myWallet.getPrivateKey().toString('hex')) 
console.log("Address: " + myWallet.getAddress().toString('hex')) 
