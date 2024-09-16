// const limit = 10
// const offset = 0;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// function convertPokemonsTypesToLi(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${type}</li>`)
// }

function convertPokemonToLi(pokemon) {
    return ` <li class="pokemon">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
                        <div class="detail">
                            <ul class="types">
                            ${pokemon.types.map((type)=> `<li class="type">${type}</li>`).join('')}
                            </ul>
                            <img src="${pokemon.photo}"></div>`
}

const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons = []) => { //try, fetch sempre usa get, por padrao fetch sempre retorna string
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

    // const newHtml = newList.join('')
    // pokemonList.innerHTML += newHtml

})


// .catch((error) => //catch(error)
//     console.log(error)
// )
// .finally(function() {
//     console.log('Requisição concluída') //finally
// })