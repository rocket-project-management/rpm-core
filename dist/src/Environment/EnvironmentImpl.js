"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = __importDefault(require("rpm-utils/Strings/String"));
require("dotenv").config();
class EnvironmentImpl {
    GetByKeyAsString(key) {
        return this.extractProcessEnvValue(key);
    }
    GetByKeyAsInteger(key) {
        const value = this.extractProcessEnvValue(key);
        if (String_1.default.IsInteger(value))
            return String_1.default.ToInteger(value);
        throw new Error(`The value for the key: ${key} is not an integer`);
    }
    GetByKeyAsFloat(key) {
        const value = this.extractProcessEnvValue(key);
        if (String_1.default.IsFloat(value))
            return String_1.default.ToFloat(value);
        throw new Error(`The value for the key: ${key} is not a float number`);
    }
    GetByKeyAsBoolean(key) {
        const value = this.extractProcessEnvValue(key);
        return String_1.default.ToBoolean(value);
    }
    GetByKeyAsJSON(key) {
        const value = this.extractProcessEnvValue(key);
        try {
            return JSON.parse(value);
        }
        catch (error) {
            throw new Error(`The value for the key: ${key} is not a JSON`);
        }
    }
    extractProcessEnvValue(key) {
        const value = process.env[key];
        if (value)
            return value;
        throw new Error(`There is no value in the environment for the key: ${key}`);
    }
}
exports.default = EnvironmentImpl;
//# sourceMappingURL=EnvironmentImpl.js.map