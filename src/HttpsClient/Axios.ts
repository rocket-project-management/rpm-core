import IHttpsClient from "./IHttpsClient";
import axios from 'axios';

export default class Axios implements IHttpsClient {
    private client;

    constructor() {
        this.client = axios.create();
    }

    public async Get(url: string, config: any): Promise<any> {
        return this.client.get(url, config);
    }

    public async Post(url: string, data: any, config: any): Promise<any> {
        return this.client.post(url, data, config);
    }

    public async Put(url: string, data: any, config: any): Promise<any> {
        return this.client.put(url, data, config);
    }

    public async Delete(url: string, config: any): Promise<any> {
        return this.client.delete(url, config);
    }
}