import { SortDirection } from "../../../enums/LogicalEnums";
import IDatabaseOrderCriteria from "../Interface/IDatabaseOrderCriteria";

export default class DatabaseOrderCriteria implements IDatabaseOrderCriteria {
    public OrderAttribute: string;
    public SortDirection: SortDirection;
    
    constructor(orderAttribute: string, sortDirection: SortDirection) {
        this.OrderAttribute = orderAttribute;
        this.SortDirection = sortDirection;
    }
}