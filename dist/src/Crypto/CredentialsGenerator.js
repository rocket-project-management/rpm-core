"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Crypto_1 = __importDefault(require("./Crypto"));
const password = process.argv[2];
if (!password) {
    console.error("No password provided");
    process.exit(1);
}
const crypto = new Crypto_1.default();
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("YOUR CREDENTIALS HASH:");
    console.log(yield crypto.HashPassword(password));
    process.exit(0);
}))();
//# sourceMappingURL=CredentialsGenerator.js.map