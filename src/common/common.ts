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