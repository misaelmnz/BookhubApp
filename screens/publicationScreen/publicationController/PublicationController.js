import axios from "axios";
import { API_URL } from "../../../api/auth";
import { getToken } from "../../../utils/storage";

export async function fetchUserPubs () {
    try {
        const token = await getToken();
        const response = await axios.get(`${API_URL}/userPUBs`, 
            { headers: {Authorization: `User ${token}`}});
        const data = response.data;
        return data;
    } catch(err) {
        console.log(err)
    }
}

export async function createPubs () {
    try {
        
    } catch(err) {
        console.log(err)
    }
}

export async function updatePubs () {
    try {

    } catch(err) {
        console.log(err)
    }
}

export async function deletePub (item_id) {
    try {
        const token = await getToken();
        const response = await axios.delete(`${API_URL}/deletePubs`, 
            { headers: {Authorization: `User ${token}`}, data: {item_id: item_id}});
        console.log(token)
        const data = response;
        return data;
    } catch(err) {
        console.error('delete: ', err)
    }
}

export async function verifyPub (pub_id) {
    try {
        const response = await axios.post(`${API_URL}/verifyPub`,
            {pub_id: pub_id});
        const data = response.data
        return data;
    } catch(err) {
        console.log(err)
    }
    
}

export async function upload (imagem_caminho) {
    try {
        const data = new FormData();
        data.append('file', {
            uri: imagem_caminho,
            type: 'image/jpeg',
            name: 'upload.jpg',
        });
        
        data.append('upload_preset', 'bookhub');
        data.append('cloud_name', 'df36nmvkh');
        
        const response = await fetch('https://api.cloudinary.com/v1_1/df36nmvkh/image/upload',{
        method: 'POST',
        body: data,
    })

    const arquivos = await response.json();
    return arquivos.secure_url;
        } catch (err) {
        throw new Error(err);
    }
}