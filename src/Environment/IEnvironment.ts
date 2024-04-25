export default abstract class IEnvironment {
    abstract GetByKeyAsString(key: string): string;
    abstract GetByKeyAsInteger(key: string): number;
    abstract GetByKeyAsFloat(key: string): number;
    abstract GetByKeyAsBoolean(key: string): boolean;
    abstract GetByKeyAsJSON(key: string): { [key: string]: any };
}