import IHttpsClient from "./IHttpsClient";
export default class Axios implements IHttpsClient {
    private client;
    constructor();
    Get(url: string, config: any): Promise<any>;
    Post(url: string, data: any, config: any): Promise<any>;
    Put(url: string, data: any, config: any): Promise<any>;
    Delete(url: string, config: any): Promise<any>;
}
