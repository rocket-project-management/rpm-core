import Crypto from "./Crypto";
import ICrypto from "./ICrypto";

const password: string = process.argv[2];

if(!password) {
    console.error("No password provided");
    process.exit(1);
}

const crypto: ICrypto = new Crypto();

(async () => {
    console.log("YOUR CREDENTIALS HASH:")
    console.log(await crypto.HashPassword(password));
    process.exit(0);
})();