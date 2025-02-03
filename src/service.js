import axios from 'axios';

const apiUrl = "http://localhost:5207"
axios.defaults.baseURL = `https://example.com/${apiUrl}`;

// הוספת Interceptor שיתפוס שגיאות ב-response

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    const result=await axios.post(`${apiUrl}/items/${name}`)    
    //TODO
    return result.data;
  },
  getTasksById: async (id) => {
    const result = await axios.get(`${apiUrl}/items/${id}`)    
    return result.data;
  },
  putTasks: async (id,item) => {
    const result = await axios.put(`${apiUrl}/items/${id}`,item)    
    return result.data;
  },
  deleteTask: async (id) => {
    const result = await axios.delete(`${apiUrl}/items/${id}`)    
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    //TODO
    return {};
  },

};
