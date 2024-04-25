import ICrypto from "./ICrypto";
export default class Crypto implements ICrypto {
    static readonly CREDENTIALS_SALT_ROUNDS: number;
    HashPassword(password: string): Promise<string>;
    ValidatePassword(password: string, hash: string): Promise<boolean>;
}
