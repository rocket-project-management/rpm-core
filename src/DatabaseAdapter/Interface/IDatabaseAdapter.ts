import IDatabaseFilterCriteria from "./IDatabaseFilterCriteria";
import IDatabaseAdapterResponse from "./IDatabaseAdapterResponse";
import IDatabaseOrderCriteria from "./IDatabaseOrderCriteria";
import IDatabaseAdapterRecord from "./IDatabaseAdapterRecord";

export default abstract class IDatabaseAdapter {
    abstract Disconnect(): Promise<void>;
    abstract GetOne(dataSpace: string, getAttributes: string[], filterCriteria: IDatabaseFilterCriteria[]): Promise<IDatabaseAdapterResponse>;
    abstract GetMany(dataSpace: string, getAttributes: string[], filterCriteria: IDatabaseFilterCriteria[], orderCriteria: IDatabaseOrderCriteria[], limit: number, offset: number): Promise<IDatabaseAdapterResponse>;
    abstract Create(dataSpace: string, record: IDatabaseAdapterRecord): Promise<void>;
    abstract CreateMany(dataSpace: string, records: IDatabaseAdapterRecord[]): Promise<void>;
    abstract Update(dataSpace: string, filterCriteria: IDatabaseFilterCriteria[], dataToUpdate: IDatabaseAdapterRecord): Promise<void>;
    abstract Delete(dataSpace: string, filterCriteria: IDatabaseFilterCriteria[]): Promise<void>;
}