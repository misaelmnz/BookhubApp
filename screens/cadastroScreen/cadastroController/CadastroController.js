import axios from "axios";
import { API_URL } from "../../../api/auth";

export async function handleSubmit(form) {
    try {
        const response = await axios.post(`${API_URL}/cadastro`,form)
        return response.data;
    } catch (error) {
      return { success: false, 
        message: error?.response?.data?.message}
    }
}