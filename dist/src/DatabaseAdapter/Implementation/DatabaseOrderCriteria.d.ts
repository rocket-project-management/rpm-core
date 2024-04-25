import { SortDirection } from "../../../enums/LogicalEnums";
import IDatabaseOrderCriteria from "../Interface/IDatabaseOrderCriteria";
export default class DatabaseOrderCriteria implements IDatabaseOrderCriteria {
    OrderAttribute: string;
    SortDirection: SortDirection;
    constructor(orderAttribute: string, sortDirection: SortDirection);
}
