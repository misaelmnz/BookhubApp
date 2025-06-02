export async function fetchSearchResults(filters) {
    const response = await fetch('http://192.168.0.2:3000/pesquisar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pesquisa: filters }),
    });
    const data = await response.json();
    return data.data || [];
}

export async function fetchFeedItem() {
    const response = await fetch('http://192.168.0.2:3000/receberPUBS');
    const data = await response.json();
    return data.data || [];
}
