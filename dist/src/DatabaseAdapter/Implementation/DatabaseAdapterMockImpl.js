"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseAdapterMockImpl {
    constructor() {
        this.GetOneInput = {};
        this.GetManyInput = {};
        this.CreateInput = {};
        this.CreateManyInput = {};
        this.UpdateInput = {};
        this.DeleteInput = {};
    }
    Disconnect() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    GetOne(dataSpace, getAttributes, filterCriteria) {
        return __awaiter(this, void 0, void 0, function* () {
            this.GetOneInput.DataSpace = dataSpace;
            this.GetOneInput.GetAttributes = getAttributes;
            this.GetOneInput.FilterCriteria = filterCriteria;
            return this.GetOneOutput;
        });
    }
    GetMany(dataSpace, getAttributes, filterCriteria, orderCriteria, limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            this.GetManyInput.DataSpace = dataSpace;
            this.GetManyInput.GetAttributes = getAttributes;
            this.GetManyInput.FilterCriteria = filterCriteria;
            this.GetManyInput.OrderCriteria = orderCriteria;
            this.GetManyInput.Limit = limit;
            this.GetManyInput.Offset = offset;
            return this.GetManyOutput;
        });
    }
    Create(dataSpace, record) {
        return __awaiter(this, void 0, void 0, function* () {
            this.CreateInput.DataSpace = dataSpace;
            this.CreateInput.Record = record;
        });
    }
    CreateMany(dataSpace, records) {
        return __awaiter(this, void 0, void 0, function* () {
            this.CreateManyInput.DataSpace = dataSpace;
            this.CreateManyInput.Records = records;
        });
    }
    Update(dataSpace, filterCriteria, dataToUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            this.UpdateInput.DataSpace = dataSpace;
            this.UpdateInput.FilterCriteria = filterCriteria;
            this.UpdateInput.DataToUpdate = dataToUpdate;
        });
    }
    Delete(dataSpace, filterCriteria) {
        return __awaiter(this, void 0, void 0, function* () {
            this.DeleteInput.DataSpace = dataSpace;
            this.DeleteInput.FilterCriteria = filterCriteria;
        });
    }
}
exports.default = DatabaseAdapterMockImpl;
//# sourceMappingURL=DatabaseAdapterMockImpl.js.map