import IDatabaseAdapterRecord from "../Interface/IDatabaseAdapterRecord";

export default class DatabaseAdapterRecord implements IDatabaseAdapterRecord {
    public readonly Attributes: string[];
    public readonly Values: string[];

    constructor(attributes: string[], values: string[]) {
        this.Attributes = attributes;
        this.Values = values;
    }
}