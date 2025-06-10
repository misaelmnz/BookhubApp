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

export async function fetchFeedItem(tipo = null) {
    try {
        let url = `${API_URL}/receberPUBS`;
        
        if (tipo !== null) {
            url += `?tipo=${tipo}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        return data.data || [];
    } catch (error) {
        console.error('Erro ao buscar publicações:', error);
        return [];
    }
}