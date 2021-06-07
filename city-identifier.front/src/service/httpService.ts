import axios from 'axios';
import {AppClient} from './client';
import {Modal} from "antd";

const qs = require('qs');

const http = axios.create({
    baseURL: ((window as any).$Env as any).URL,
    timeout: 30000,
    paramsSerializer: function(params) {
        return qs.stringify(params, {
            encode: false,
        });
    },
});

http.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (!!error.response && !!error.response.data.error && !!error.response.data.error.message && error.response.data.error.details) {
            Modal.error({
                title: error.response.data.error.message,
                content: error.response.data.error.details,
            });
        } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
            Modal.error({
                title: 'Error',
                content: error.response.data.error.message,
            });
        } else if (!error.response) {
            Modal.error({ content: 'Unknown error' });
        }

        setTimeout(() => {}, 5000);
        return Promise.reject(error);
    }
);

const httpClient = new AppClient(http)
export default httpClient;
