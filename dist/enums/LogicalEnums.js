"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortDirection = exports.ComparisonOperator = void 0;
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator[ComparisonOperator["Equal"] = 0] = "Equal";
    ComparisonOperator[ComparisonOperator["NotEqual"] = 1] = "NotEqual";
    ComparisonOperator[ComparisonOperator["Less"] = 2] = "Less";
    ComparisonOperator[ComparisonOperator["Great"] = 3] = "Great";
    ComparisonOperator[ComparisonOperator["LessEqual"] = 4] = "LessEqual";
    ComparisonOperator[ComparisonOperator["GreatEqual"] = 5] = "GreatEqual";
    ComparisonOperator[ComparisonOperator["IsNull"] = 6] = "IsNull";
    ComparisonOperator[ComparisonOperator["IsNotNull"] = 7] = "IsNotNull";
    ComparisonOperator[ComparisonOperator["Like"] = 8] = "Like";
})(ComparisonOperator || (exports.ComparisonOperator = ComparisonOperator = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Ascendant"] = 0] = "Ascendant";
    SortDirection[SortDirection["Descendant"] = 1] = "Descendant";
})(SortDirection || (exports.SortDirection = SortDirection = {}));
//# sourceMappingURL=LogicalEnums.js.map