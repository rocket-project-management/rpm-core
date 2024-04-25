export default abstract class IJwtToken {
    public abstract GenerateToken(claims: object, secret: string, secondsToExpire: number): string;
    public abstract ValidateToken(token: string, secret: string): boolean;
    abstract DecodeClaims(token: string): { [key: string]: any }
}