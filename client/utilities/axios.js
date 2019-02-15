
import axios from 'axios';
import React from 'react';

export const serverUrl = `http://192.168.0.101:8081/api/send`;
export const prodUrl = `https://archon-mail.herokuapp.com/api/send`;
const currentUrl = process.env.NODE_ENV === 'development' ? serverUrl : prodUrl

export const axiosWrapper = async (method, target, payload, content) => {

    const url = `${prodUrl}`;
    if (content) {
      const data = new FormData();
      data.append('file', payload);
      return fetch(url, {
        credentials: 'include',
        method,
        body: data
      });
    }
    if (payload !== undefined) {
      let params = new URLSearchParams();
      Object.keys(payload).forEach(key => {
        params.append(`${key}`, `${payload[key]}`);
      });
      return axios({
        url,
        method,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: params
      });
    } else {
      return axios({
        url,
        method,
        withCredentials: true
      });
    }
  };
