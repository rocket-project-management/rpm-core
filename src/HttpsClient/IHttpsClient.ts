export default abstract class IHttpsClient {
    abstract Get(url: string, config: any): Promise<any>;
    abstract Post(url: string, data: any, config: any): Promise<any>;
    abstract Put(url: string, data: any, config: any): Promise<any>;
    abstract Delete(url: string, config: any): Promise<any>;
}