import IEnvironmnet from "./IEnvironment";
import String from "rpm-utils/Strings/String";
require("dotenv").config();

export default class EnvironmentImpl implements IEnvironmnet {
    public GetByKeyAsString(key: string): string {
        return this.extractProcessEnvValue(key);
    }

    public GetByKeyAsInteger(key: string): number {
        const value: string = this.extractProcessEnvValue(key);
        if(String.IsInteger(value)) return String.ToInteger(value);
        throw new Error(`The value for the key: ${key} is not an integer`);
    }

    public GetByKeyAsFloat(key: string): number {
        const value: string = this.extractProcessEnvValue(key);
        if(String.IsFloat(value)) return String.ToFloat(value);
        throw new Error(`The value for the key: ${key} is not a float number`);
    }

    public GetByKeyAsBoolean(key: string): boolean {
        const value: string = this.extractProcessEnvValue(key);
        return String.ToBoolean(value);
    }

    public GetByKeyAsJSON(key: string): { [key: string]: any; } {
        const value: string = this.extractProcessEnvValue(key);
        try {
            return JSON.parse(value);
        } catch(error) {
            throw new Error(`The value for the key: ${key} is not a JSON`);
        }
    }
    
    private extractProcessEnvValue(key: string): string {
        const value: string | undefined = process.env[key];
        if(value) return value;
        throw new Error(`There is no value in the environment for the key: ${key}`);
    }
}