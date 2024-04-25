import { SortDirection } from "../../../enums/LogicalEnums";
export default interface IDatabaseOrderCriteria {
    readonly OrderAttribute: string;
    readonly SortDirection: SortDirection;
}
