import { ComparisonOperator } from "../../../enums/LogicalEnums";
import IDatabaseFilterCriteria from "../Interface/IDatabaseFilterCriteria";

export default class DatabaseFilterCriteria implements IDatabaseFilterCriteria {
    public readonly FilterAttribute: string;
    public readonly Operator: ComparisonOperator;
    public readonly Value: string | null;

    constructor(filterAttribute: string, operator: ComparisonOperator, value: string | null) {
        this.FilterAttribute = filterAttribute;
        this.Operator = operator;
        this.Value = value;
    }
}