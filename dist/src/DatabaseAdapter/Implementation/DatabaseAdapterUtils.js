"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseAdapterRecord_1 = __importDefault(require("./DatabaseAdapterRecord"));
const DatabaseAdapterResponse_1 = __importDefault(require("./DatabaseAdapterResponse"));
const DatabaseFilterCriteria_1 = __importDefault(require("./DatabaseFilterCriteria"));
const DatabaseOrderCriteria_1 = __importDefault(require("./DatabaseOrderCriteria"));
class DatabaseAdapterUtils {
    static GenerateFilterCriteria(filterAttribute, operator, value) {
        return new DatabaseFilterCriteria_1.default(filterAttribute, operator, value);
    }
    static GenerateOrderCriteria(orderAttribute, sortDirection) {
        return new DatabaseOrderCriteria_1.default(orderAttribute, sortDirection);
    }
    static GenerateDatabaseAdapterRecord(attributes, values) {
        if (attributes.length !== values.length)
            throw new Error("Attributes and values length missmatch for record creation");
        return new DatabaseAdapterRecord_1.default(attributes, values);
    }
    static GenerateDatabaseAdapterRecordList(attributes, valuesList) {
        const records = [];
        try {
            for (const values of valuesList) {
                if (attributes.length !== values.length)
                    throw new Error("Attributes and values length missmatch for record creation");
                const newRecord = this.GenerateDatabaseAdapterRecord(attributes, values);
                records.push(newRecord);
            }
        }
        catch (error) {
            throw new Error(`An error was launched in GenerateDatabaseAdapterRecordList, Reason: ${error}`);
        }
        return records;
    }
    static GenerateDatabaseAdapterResponse(dataSpace, records) {
        return new DatabaseAdapterResponse_1.default(dataSpace, records);
    }
    static GetValueByAttribute(record, attribute) {
        if (!record.Attributes.includes(attribute))
            throw new Error(`Attribute ${attribute} does not exists in attributes ${record.Attributes}`);
        const attributeIndex = record.Attributes.indexOf(attribute);
        return record.Values[attributeIndex];
    }
}
exports.default = DatabaseAdapterUtils;
//# sourceMappingURL=DatabaseAdapterUtils.js.map