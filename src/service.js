import axios from "axios";
// import express from 'express';

const apiUrl = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = apiUrl;
axios.interceptors.response.use(
  response => response,  
  error => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);  
  }
);

export default {
  getTasks: async () => {
    try {
      console.log(apiUrl);
      
      const result = await axios.get(`${apiUrl}/items`);
      return result.data;
    } catch (error) {
      console.log(
        "eroor in getItems",
        error.response ? error.response.data : error.message
      );
    }
  },

  addTask: async (name) => {
    try {
      const result = await axios.post(`${apiUrl}/items`, { name });
      return result.data;
    } catch (error) {
      console.log(
        "eroor in addItem",
        error.response ? error.response.data : error.message
      );
    }
  },
  getTasksById: async (id) => {
    try {
      const result = await axios.get(`${apiUrl}/items/${id}`);
      return result.data;
    } catch (error) {
      console.log(
        "eroor in getItemsById",
        error.response ? error.response.data : error.message
      );
    }
  },
  setCompleted: async (id, isComplete) => {
    try {
      const result = await axios.put(`${apiUrl}/items/${id}`, {
        isComplete,
      });
      return result.data;
    } catch (error) {
      console.log(
        "eroor in putItem",
        error.response ? error.response.data : error.message
      );
    }
  },
  deleteTask: async (id) => {
    try {
      const result = await axios.delete(`${apiUrl}/items/${id}`);
      return result.data;
    } catch (error) {
      console.log(
        "eroor in deleteItem",
        error.response ? error.response.data : error.message
      );
    }
  },
};
