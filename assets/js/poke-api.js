const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    // Retornar a Promise do fetch
    return fetch(url)
        .then((response) => response.json()) // Converte a resposta para JSON
        .then((jsonBody) => jsonBody.results) // Retorna apenas a lista de resultados
        .catch((error) => console.error('Erro ao buscar Pokémons:', error)); // Lida com erros
};