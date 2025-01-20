
import axios, { Method, AxiosRequestConfig } from 'axios';
import { getToken } from './common';
const headers: Record<string, string> = {
    'Content-Type': "application/json; charset=utf-8",
    'Authorization': `UUID ${getToken()?.accessToken}`,
}
const BASE = 'http://localhost:8081/app-api'
const BASE_ADMIN = 'http://localhost:8081/admin-api'
export class Request {
    public static call(path: string, method: Method, object?: any) {
        let data: any = object;
        if (typeof (object) === 'object') {
            data = JSON.stringify(object);
        }
        let config: AxiosRequestConfig = {
            method: method,
            maxBodyLength: Infinity,
            url: `${BASE}${path}`,
            data: data,
            headers: headers
        };
       
        console.log("data config: ", config)
        return axios.request(config)
    }

    public static callAdmin(path: string, method: Method, object?: any) {
        let data: any;
        if (typeof (object) === 'object') {
            data = JSON.stringify(object);
        }
        data = object;
        let config: AxiosRequestConfig = {
            method: method,
            maxBodyLength: Infinity,
            url: `${BASE_ADMIN}${path}`,
            data: data,
            headers: headers
        };

        return axios.request(config)
    }
}