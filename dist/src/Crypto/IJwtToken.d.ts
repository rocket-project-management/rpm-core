export default abstract class IJwtToken {
    abstract GenerateToken(claims: object, secret: string, secondsToExpire: number): string;
    abstract ValidateToken(token: string, secret: string): boolean;
    abstract DecodeClaims(token: string): {
        [key: string]: any;
    };
}
