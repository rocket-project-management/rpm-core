import IEnvironmnet from "./IEnvironment";
export default class EnvironmentImpl implements IEnvironmnet {
    GetByKeyAsString(key: string): string;
    GetByKeyAsInteger(key: string): number;
    GetByKeyAsFloat(key: string): number;
    GetByKeyAsBoolean(key: string): boolean;
    GetByKeyAsJSON(key: string): {
        [key: string]: any;
    };
    private extractProcessEnvValue;
}
