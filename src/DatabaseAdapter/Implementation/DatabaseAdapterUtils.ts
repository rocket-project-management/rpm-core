import { ComparisonOperator, SortDirection } from "../../../enums/LogicalEnums";
import DatabaseAdapterRecord from "./DatabaseAdapterRecord";
import DatabaseAdapterResponse from "./DatabaseAdapterResponse";
import DatabaseFilterCriteria from "./DatabaseFilterCriteria";
import DatabaseOrderCriteria from "./DatabaseOrderCriteria";
import IDatabaseAdapterRecord from "../Interface/IDatabaseAdapterRecord";
import IDatabaseAdapterResponse from "../Interface/IDatabaseAdapterResponse";
import IDatabaseFilterCriteria from "../Interface/IDatabaseFilterCriteria";
import IDatabaseOrderCriteria from "../Interface/IDatabaseOrderCriteria";

export default abstract class DatabaseAdapterUtils {
    public static GenerateFilterCriteria(filterAttribute: string, operator: ComparisonOperator, value: string | null): IDatabaseFilterCriteria
    {
        return new DatabaseFilterCriteria(filterAttribute, operator, value);
    }

    public static GenerateOrderCriteria(orderAttribute: string, sortDirection: SortDirection): IDatabaseOrderCriteria
    {
        return new DatabaseOrderCriteria(orderAttribute, sortDirection);
    }

    public static GenerateDatabaseAdapterRecord(attributes: string[], values: string[]): IDatabaseAdapterRecord
    {
        if(attributes.length !== values.length) throw new Error("Attributes and values length missmatch for record creation");
        return new DatabaseAdapterRecord(attributes, values);
    }

    public static GenerateDatabaseAdapterRecordList(attributes: string[], valuesList: string[][]): IDatabaseAdapterRecord[]
    {
        const records: IDatabaseAdapterRecord[] = [];

        try {
            for(const values of valuesList) {
                if(attributes.length !== values.length) throw new Error("Attributes and values length missmatch for record creation");
                const newRecord: IDatabaseAdapterRecord = this.GenerateDatabaseAdapterRecord(attributes, values);
                records.push(newRecord);
            }
        } catch(error) {
            throw new Error(`An error was launched in GenerateDatabaseAdapterRecordList, Reason: ${error}`)
        }

        return records;
    }

    public static GenerateDatabaseAdapterResponse(dataSpace: string, records: IDatabaseAdapterRecord[]): IDatabaseAdapterResponse
    {
        return new DatabaseAdapterResponse(dataSpace, records);
    }

    public static GetValueByAttribute(record: IDatabaseAdapterRecord, attribute: string): string
    {
        if(!record.Attributes.includes(attribute)) throw new Error(`Attribute ${attribute} does not exists in attributes ${record.Attributes}`);
        const attributeIndex: number = record.Attributes.indexOf(attribute);
        return record.Values[attributeIndex];
    }
}