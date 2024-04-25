import IDatabaseAdapterRecord from "./IDatabaseAdapterRecord";

export default interface IDatabaseAdapterResponse {
    readonly DataSpace: string;
    readonly Records: Array<IDatabaseAdapterRecord>;
}