"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DependencyInjector {
    static Register(interfaceReference, factory) {
        if (!interfaceReference || !interfaceReference.name)
            throw new Error(`Invalid interfaceReference: ${interfaceReference}`);
        DependencyInjector.instances.set(interfaceReference, factory);
    }
    static Resolve(interfaceReference) {
        const factory = DependencyInjector.instances.get(interfaceReference);
        if (factory !== undefined) {
            const instance = factory();
            if (instance)
                return instance;
        }
        throw new Error(`DependenctInjector.Resolve: ${interfaceReference.name} === undefined`);
    }
    static Clear() {
        DependencyInjector.instances.clear();
    }
}
DependencyInjector.instances = new Map();
exports.default = DependencyInjector;
//# sourceMappingURL=DependencyInjector.js.map