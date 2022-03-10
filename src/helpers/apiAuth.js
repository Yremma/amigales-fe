import axios          from 'axios';
import { getHeaders } from './authHelper';


const apiAuth = axios.create({
    baseURL: process.env.REACT_APP_API_LOGIN_URL,
    // withCredentials: true,
});

apiAuth.interceptors.request.use(
    config => {
        // Do something before request is sent
        config.headers = getHeaders();
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);


axios.interceptors.response.use(
    response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        // if (
        //   error.response &&
        //   (error.response.status === 400 || error.response.status === 401)
        // ) {
        //   //clean cache
        //   return Promise.reject(error.response);
        // } else {
        //   return Promise.reject(error.response);
        // }
    }
);

export default apiAuth;