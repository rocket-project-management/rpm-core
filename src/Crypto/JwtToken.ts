import IJwtToken from "./IJwtToken";
import * as jwt from 'jsonwebtoken';
import String from "rpm-utils/Strings/String"

export default abstract class JwtToken implements IJwtToken {
    public GenerateToken(claims: object, secret: string, secondsToExpire: number): string {
        return jwt.sign(claims, secret, { expiresIn: secondsToExpire });
    }

    public ValidateToken(token: string, secret: string): boolean {
        try {
            jwt.verify(token, secret);
            return true;
        } catch(error) {
            return false;
        }
    }

    DecodeClaims(token: string): { [key: string]: any } {
        const decoded = jwt.decode(token);

        if(!decoded || typeof decoded === "string") return {};

        return decoded;
    }
}