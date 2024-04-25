import ICrypto from "./ICrypto";
import * as bcrypt from 'bcrypt';

export default class Crypto implements ICrypto {
    public static readonly CREDENTIALS_SALT_ROUNDS: number = 10;

    public async HashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, Crypto.CREDENTIALS_SALT_ROUNDS);
    }
    public async ValidatePassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
    
}