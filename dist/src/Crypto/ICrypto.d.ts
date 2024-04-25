export default abstract class ICrypto {
    abstract HashPassword(password: string): Promise<string>;
    abstract ValidatePassword(password: string, hash: string): Promise<boolean>;
}
