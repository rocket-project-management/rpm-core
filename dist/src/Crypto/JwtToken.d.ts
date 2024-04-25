import IJwtToken from "./IJwtToken";
export default abstract class JwtToken implements IJwtToken {
    GenerateToken(claims: object, secret: string, secondsToExpire: number): string;
    ValidateToken(token: string, secret: string): boolean;
    DecodeClaims(token: string): {
        [key: string]: any;
    };
}
