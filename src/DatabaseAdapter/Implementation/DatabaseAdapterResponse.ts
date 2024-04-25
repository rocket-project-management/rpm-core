import IDatabaseAdapterRecord from "../Interface/IDatabaseAdapterRecord";
import IDatabaseAdapterResponse from "../Interface/IDatabaseAdapterResponse";

export default class DatabaseAdapterResponse implements IDatabaseAdapterResponse {
    public readonly DataSpace: string;
    public readonly Records: IDatabaseAdapterRecord[];

    constructor(dataSpace: string, records: IDatabaseAdapterRecord[]) {
        this.DataSpace = dataSpace;
        this.Records = records;
    }
}