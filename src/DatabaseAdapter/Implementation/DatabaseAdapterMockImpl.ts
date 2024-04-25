import IDatabaseAdapter from "../Interface/IDatabaseAdapter";
import IDatabaseAdapterRecord from "../Interface/IDatabaseAdapterRecord";
import IDatabaseAdapterResponse from "../Interface/IDatabaseAdapterResponse";
import IDatabaseFilterCriteria from "../Interface/IDatabaseFilterCriteria";
import IDatabaseOrderCriteria from "../Interface/IDatabaseOrderCriteria";

export default class DatabaseAdapterMockImpl implements IDatabaseAdapter {
    public async Disconnect(): Promise<void> {}

    public GetOneInput: {[key: string]: any} = {};
    public GetOneOutput!: IDatabaseAdapterResponse;
    public GetManyInput: {[key: string]: any} = {};
    public GetManyOutput!: IDatabaseAdapterResponse;
    public CreateInput: {[key: string]: any} = {};
    public CreateManyInput: {[key: string]: any} = {};
    public UpdateInput: {[key: string]: any} = {};
    public DeleteInput: {[key: string]: any} = {};

    public async GetOne(dataSpace: string, getAttributes: string[], filterCriteria: IDatabaseFilterCriteria[]): Promise<IDatabaseAdapterResponse>
    {
        this.GetOneInput.DataSpace = dataSpace;
        this.GetOneInput.GetAttributes = getAttributes;
        this.GetOneInput.FilterCriteria = filterCriteria;
        return this.GetOneOutput;
    }

    public async GetMany(dataSpace: string, getAttributes: string[], filterCriteria: IDatabaseFilterCriteria[], orderCriteria: IDatabaseOrderCriteria[], limit: number, offset: number): Promise<IDatabaseAdapterResponse>
    {
        this.GetManyInput.DataSpace = dataSpace;
        this.GetManyInput.GetAttributes = getAttributes;
        this.GetManyInput.FilterCriteria = filterCriteria;
        this.GetManyInput.OrderCriteria = orderCriteria;
        this.GetManyInput.Limit = limit;
        this.GetManyInput.Offset = offset;
        return this.GetManyOutput;
    }

    public async Create(dataSpace: string, record: IDatabaseAdapterRecord): Promise<void>
    {
        this.CreateInput.DataSpace = dataSpace;
        this.CreateInput.Record = record;
    }

    public async CreateMany(dataSpace: string, records: IDatabaseAdapterRecord[]): Promise<void>
    {
        this.CreateManyInput.DataSpace = dataSpace;
        this.CreateManyInput.Records = records;
    }

    public async Update(dataSpace: string, filterCriteria: IDatabaseFilterCriteria[], dataToUpdate: IDatabaseAdapterRecord): Promise<void>
    {
        this.UpdateInput.DataSpace = dataSpace;
        this.UpdateInput.FilterCriteria = filterCriteria;
        this.UpdateInput.DataToUpdate = dataToUpdate;
    }

    public async Delete(dataSpace: string, filterCriteria: IDatabaseFilterCriteria[]): Promise<void>
    {
        this.DeleteInput.DataSpace = dataSpace;
        this.DeleteInput.FilterCriteria = filterCriteria;
    }
}