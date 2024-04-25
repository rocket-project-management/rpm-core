import IDatabaseAdapterRecord from "../Interface/IDatabaseAdapterRecord";
export default class DatabaseAdapterRecord implements IDatabaseAdapterRecord {
    readonly Attributes: string[];
    readonly Values: string[];
    constructor(attributes: string[], values: string[]);
}
