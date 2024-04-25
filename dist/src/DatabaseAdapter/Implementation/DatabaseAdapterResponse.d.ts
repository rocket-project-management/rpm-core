import IDatabaseAdapterRecord from "../Interface/IDatabaseAdapterRecord";
import IDatabaseAdapterResponse from "../Interface/IDatabaseAdapterResponse";
export default class DatabaseAdapterResponse implements IDatabaseAdapterResponse {
    readonly DataSpace: string;
    readonly Records: IDatabaseAdapterRecord[];
    constructor(dataSpace: string, records: IDatabaseAdapterRecord[]);
}
