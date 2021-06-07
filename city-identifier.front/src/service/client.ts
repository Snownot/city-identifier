import {
    AxiosInstance,
    AxiosPromise,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';

export interface RequestHeaders {
    header: string[];
}

export type Response_getApiServicesAppSubscriptionGetAllList_200 = string

/**
 * Api Documentation
 * @class AppClient
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export class AppClient {

    public constructor(axios: AxiosInstance) {
        this.axios = axios;
        this.delete = this.axios.delete
        this.get = this.axios.get
        this.getUri = this.axios.getUri
        this.head = this.axios.head
        this.options = this.axios.options
        this.patch = this.axios.patch
        this.post = this.axios.post
        this.put = this.axios.put
        this.request = this.axios.request
    }

    private readonly axios: AxiosInstance;
    readonly getUri: (config ?: AxiosRequestConfig) => string;
    readonly request: <T = any, R = AxiosResponse<T>> (config: AxiosRequestConfig) => Promise<R>;
    readonly get: <T = any, R = AxiosResponse<T>> (url: string, config ?: AxiosRequestConfig) => Promise<R>;
    readonly delete: <T = any, R = AxiosResponse<T>> (url: string, config ?: AxiosRequestConfig) => Promise<R>;
    readonly head: <T = any, R = AxiosResponse<T>> (url: string, config ?: AxiosRequestConfig) => Promise<R>;
    readonly options: <T = any, R = AxiosResponse<T>> (url: string, config ?: AxiosRequestConfig) => Promise<R>;
    readonly post: <T = any, R = AxiosResponse<T>> (url: string, data ?: any, config ?: AxiosRequestConfig) => Promise<R>;
    readonly put: <T = any, R = AxiosResponse<T>> (url: string, data ?: any, config ?: AxiosRequestConfig) => Promise<R>;
    readonly patch: <T = any, R = AxiosResponse<T>> (url: string, data ?: any, config ?: AxiosRequestConfig) => Promise<R>;

    public getApiServicesAppSessionGetCurrentLoginInformation(authorization: {}): AxiosPromise < Response_getApiServicesAppSubscriptionGetAllList_200 > {
        let body = null;
        let path = "/connect";
        const query: {} = {};
        return this.axios({
            headers: {
                Authorization: authorization
            },
            method: 'GET',
            url: path,
            params: query,
            data: body ,
        });

    }


}
