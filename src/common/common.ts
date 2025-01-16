import { AuthLoginResVO } from "../page/authen/record/record.resp.vo"

export interface CommonResult<T> {
    message?: string
    code?: number
    data?: T
}

export interface PageResult<T> {
    currentPage?: number
    totalPage?: number
    list?: Array<T>
}
export class PagePram {
    page: number = 1
    limit: number = 50

}

export interface Pair<K, V> {
    key?: K
    value?: V
} 

export const mapToObject = (map: Map<string, string>): Record<string, string> => {
    const obj: Record<string, string> = {};
    map.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  };


export const getToken = () => {
    if(localStorage.getItem("jwt") === null) {
        return undefined
    }
    //@ts-ignore
    const res: AuthLoginResVO = JSON.parse(localStorage.getItem("jwt"))
    return res;
}