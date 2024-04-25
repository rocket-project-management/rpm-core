import { ComparisonOperator } from "../../../enums/LogicalEnums";

export default interface IDatabaseFilterCriteria {
    readonly FilterAttribute: string;
    readonly Operator: ComparisonOperator;
    readonly Value: string | null;
}