export default class DependencyInjector {
    private static instances;
    static Register<T>(interfaceReference: any, factory: () => T): void;
    static Resolve<T>(interfaceReference: any): T;
    static Clear(): void;
}
