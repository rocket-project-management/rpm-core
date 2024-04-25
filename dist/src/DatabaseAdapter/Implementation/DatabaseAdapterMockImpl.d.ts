import IDatabaseAdapter from "../Interface/IDatabaseAdapter";
import IDatabaseAdapterRecord from "../Interface/IDatabaseAdapterRecord";
import IDatabaseAdapterResponse from "../Interface/IDatabaseAdapterResponse";
import IDatabaseFilterCriteria from "../Interface/IDatabaseFilterCriteria";
import IDatabaseOrderCriteria from "../Interface/IDatabaseOrderCriteria";
export default class DatabaseAdapterMockImpl implements IDatabaseAdapter {
    Disconnect(): Promise<void>;
    GetOneInput: {
        [key: string]: any;
    };
    GetOneOutput: IDatabaseAdapterResponse;
    GetManyInput: {
        [key: string]: any;
    };
    GetManyOutput: IDatabaseAdapterResponse;
    CreateInput: {
        [key: string]: any;
    };
    CreateManyInput: {
        [key: string]: any;
    };
    UpdateInput: {
        [key: string]: any;
    };
    DeleteInput: {
        [key: string]: any;
    };
    GetOne(dataSpace: string, getAttributes: string[], filterCriteria: IDatabaseFilterCriteria[]): Promise<IDatabaseAdapterResponse>;
    GetMany(dataSpace: string, getAttributes: string[], filterCriteria: IDatabaseFilterCriteria[], orderCriteria: IDatabaseOrderCriteria[], limit: number, offset: number): Promise<IDatabaseAdapterResponse>;
    Create(dataSpace: string, record: IDatabaseAdapterRecord): Promise<void>;
    CreateMany(dataSpace: string, records: IDatabaseAdapterRecord[]): Promise<void>;
    Update(dataSpace: string, filterCriteria: IDatabaseFilterCriteria[], dataToUpdate: IDatabaseAdapterRecord): Promise<void>;
    Delete(dataSpace: string, filterCriteria: IDatabaseFilterCriteria[]): Promise<void>;
}
