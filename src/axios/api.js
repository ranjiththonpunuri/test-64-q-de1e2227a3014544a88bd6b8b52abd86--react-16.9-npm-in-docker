const axios = require('axios');
const endpoint=process.env.REACT_APP_API_URL || 'http://54.242.57.203:4060'
export const fetchLeadsApi=()=>{
   return axios.get(endpoint+'/api/leads/?location_string=India')
} 
export const addLeadApi=(body)=>{
    return axios.post(endpoint+'/api/leads', body)
} 
export const deleteLeadApi=(id)=>{
    return axios.delete(endpoint+'/api/leads/'+id)
} 
export const updateLeadApi=(id,body)=>{
    return axios.put(endpoint+'/api/leads/'+id, body)
} 
