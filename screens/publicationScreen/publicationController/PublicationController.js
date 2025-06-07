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

export async function deletePubs () {
    try {

    } catch(err) {
        console.log(err)
    }
}