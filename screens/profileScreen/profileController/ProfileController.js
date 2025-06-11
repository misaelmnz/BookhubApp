import axios from "axios";
import { getToken } from "../../../utils/storage";
import { API_URL } from "../../../api/auth";

export async function mostrarUser () {
    try {
        const token = await getToken()
        const response = await axios.get(`${API_URL}/userInfo`, { headers: {Authorization: `User ${token}`}});
        const data = response.data;
        return data;
        
    } catch (err) {
        console.log(err)
    }
}