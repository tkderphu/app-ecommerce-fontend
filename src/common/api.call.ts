
import axios, { Method, AxiosRequestConfig } from 'axios';
import { getToken } from './common';
export const headers: Record<string, string> = {
    'Content-Type': "application/json; charset=utf-8",
    'Authorization': `UUID ${getToken()?.accessToken}`,
}
export const BASE_URL = "http://localhost:8081"
const BASE_APP = `${BASE_URL}/app-api`
const BASE_ADMIN = `${BASE_URL}/admin-api`
export class Request {
    public static call(path: string, method: Method, object?: any) {
        let data: any = object;
        if (typeof (object) === 'object') {
            data = JSON.stringify(object);
        }
        let config: AxiosRequestConfig = {
            method: method,
            maxBodyLength: Infinity,
            url: `${BASE_APP}${path}`,
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