// Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL
  || (window.location.port === '3000'
    ? 'http://localhost:8000/api'
    : 'http://localhost:8000/api');

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCategories = () => api.get('/categories/');
export const getMenuItems = (params = {}) => api.get('/menu-items/', { params });
export const getMenuItem = (id) => api.get(`/menu-items/${id}/`);
export const createOrder = (orderData) => api.post('/orders/', orderData);
export const getOrder = (id) => api.get(`/orders/${id}/`);

export default api;
