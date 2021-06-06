import { L } from '../lib/utility';
import { Modal } from 'antd';
import axios from 'axios';
import {AppClient} from './client';

const qs = require('qs');

declare var abp: any;

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8585/",
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

let allReadyProcessing401 = false

http.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error?.response?.status === 401){
        if(!allReadyProcessing401){
          allReadyProcessing401 = true
          const handle401 = () => {
            sessionStorage.clear()
            // To clear memory variables and show login page.
            window.open("/", "_self")
          }
          handle401()
        }
      }
      else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message && error.response.data.error.details) {
        Modal.error({
          title: error.response.data.error.message,
          content: error.response.data.error.details,
        });
      } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
        Modal.error({
          title: L('Error'),
          content: error.response.data.error.message,
        });
      } else if (!error.response) {
        Modal.error({ content: L('Unknown error') });
      }

      setTimeout(() => {}, 5000);

      return Promise.reject(error);
    }
);

const httpClient = new AppClient(http)
export default httpClient;
