import axios, { AxiosInstance, AxiosError } from 'axios';
import HttpStatus from '~/model/constants/HttpStatus';

//const API_SERVER = 'http://15.164.245.243:8080'; //process.env.REACT_APP_API_BASE_URL || '';
const API_SERVER = 'http://localhost:8080'; //process.env.REACT_APP_API_BASE_URL || '';
const API_TIME_OUT = 10000; //Number(process.env.REACT_APP_API_TIME_OUT) || 0;

const MEDIA_TYPE = {
  JSON: 'application/json',
};
const config = {
  baseURL: API_SERVER,
  headers: {
    'Content-Type': `${MEDIA_TYPE.JSON}; charset=utf-8`,
    Accept: MEDIA_TYPE.JSON,
  },
  timeout: API_TIME_OUT,
  withCredentials: false,
};

export default class Api {
  constructor() {
    this.axiosInstance = axios.create(config);

    this.axiosInstance.interceptors.request.use((config) => {
      if (!window.navigator.onLine) {
        return Promise.reject({
          statue: HttpStatus.BAD_REQUEST,
          message: '인터넷 상태가 안좋습니다. 랜선을 확인해주세요.',
          errors: [],
        });
      }
      return config;
    });

    this.axiosInstance.interceptors.response.use(
      ({ data, headers, status, config }) => ({
        data,
        headers,
        status,
        config,
      }),
      (error) => {
        let errResponse;
        if (!error.response) {
          const message = error.message === 'Network Error' ? '서버오류입니다.' : error.message;
          errResponse = {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message,
            code: null,
            errors: [],
            isError: true,
          };
        } else {
          const { status, message, code } = error.response.data;
          errResponse = { status, message, code, errors: error.response.data.errors, isError: true };
        }
        //return Promise.reject(errResponse);
        return errResponse;
      },
    );
  }

  get(uri, data, options) {
    return this.axiosInstance.get(uri, { params: data, ...options });
  }

  put(uri, data) {
    return this.axiosInstance.put(uri, data);
  }

  patch(uri, data) {
    return this.axiosInstance.patch(uri, data);
  }

  delete(uri, data) {
    return this.axiosInstance.delete(uri, data);
  }

  post(uri, data, options) {
    return this.axiosInstance.post(uri, data, { headers: { ...options } });
  }
}

export const apiInstance = new Api();
