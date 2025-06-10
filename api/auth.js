import axios from 'axios';

export const API_URL = 'http://192.168.15.13:3000'

export const login = async (usuario, senha) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {usuario, senha});
        return response.data;
        
    } catch (err) {
        return false;
    }
};