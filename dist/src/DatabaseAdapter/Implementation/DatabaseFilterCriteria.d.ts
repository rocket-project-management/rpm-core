import { ComparisonOperator } from "../../../enums/LogicalEnums";
import IDatabaseFilterCriteria from "../Interface/IDatabaseFilterCriteria";
export default class DatabaseFilterCriteria implements IDatabaseFilterCriteria {
    readonly FilterAttribute: string;
    readonly Operator: ComparisonOperator;
    readonly Value: string | null;
    constructor(filterAttribute: string, operator: ComparisonOperator, value: string | null);
}
