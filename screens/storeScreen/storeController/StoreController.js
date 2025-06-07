import { API_URL } from '../../../api/auth'

export async function fetchSearchResults(filters) {
    const response = await fetch(`${API_URL}/pesquisar`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pesquisa: filters }),
    });
    const data = await response.json();
    return data.data || [];
}

export async function fetchFeedItem() {
    const response = await fetch(`${API_URL}/receberPUBS`);
    const data = await response.json();
    return data.data || [];
}