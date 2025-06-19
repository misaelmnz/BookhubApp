import axios from "axios";
import { API_URL } from "../../../api/auth";

export async function receberGeneros() {
    try {
        const response = await axios.get(`${API_URL}/receberGeneros`)
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Erro ao buscar generos")
    }
}

