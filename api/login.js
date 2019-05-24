import axios from 'axios';
import Qs from 'qs';

export const login = (post) => {
    return axios.request({url: '/api/login', method: 'post', data: post})
};
