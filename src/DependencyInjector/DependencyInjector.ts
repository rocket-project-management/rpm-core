export default class DependencyInjector {
    private static instances: Map<string, any> = new Map<string, any>();

    public static Register<T>(interfaceReference: any, factory: () => T): void {
        if(!interfaceReference || !interfaceReference.name) throw new Error(`Invalid interfaceReference: ${interfaceReference}`);
        DependencyInjector.instances.set(interfaceReference, factory);
    }

    public static Resolve<T>(interfaceReference: any): T {
        const factory: () => T = DependencyInjector.instances.get(interfaceReference);
        if(factory !== undefined) {
            const instance: T = factory();
            if(instance) return instance;
        }
        
        throw new Error(`DependenctInjector.Resolve: ${interfaceReference.name} === undefined`);
    }

    public static Clear(): void {
        DependencyInjector.instances.clear();
    }
}