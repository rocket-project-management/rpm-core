import { ComparisonOperator, SortDirection } from "../../../enums/LogicalEnums";
import IDatabaseAdapterRecord from "../Interface/IDatabaseAdapterRecord";
import IDatabaseAdapterResponse from "../Interface/IDatabaseAdapterResponse";
import IDatabaseFilterCriteria from "../Interface/IDatabaseFilterCriteria";
import IDatabaseOrderCriteria from "../Interface/IDatabaseOrderCriteria";
export default abstract class DatabaseAdapterUtils {
    static GenerateFilterCriteria(filterAttribute: string, operator: ComparisonOperator, value: string | null): IDatabaseFilterCriteria;
    static GenerateOrderCriteria(orderAttribute: string, sortDirection: SortDirection): IDatabaseOrderCriteria;
    static GenerateDatabaseAdapterRecord(attributes: string[], values: string[]): IDatabaseAdapterRecord;
    static GenerateDatabaseAdapterRecordList(attributes: string[], valuesList: string[][]): IDatabaseAdapterRecord[];
    static GenerateDatabaseAdapterResponse(dataSpace: string, records: IDatabaseAdapterRecord[]): IDatabaseAdapterResponse;
    static GetValueByAttribute(record: IDatabaseAdapterRecord, attribute: string): string;
}
