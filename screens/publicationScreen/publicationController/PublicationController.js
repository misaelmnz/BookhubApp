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