const limit = 10
const offset = 0;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return ` <li class="pokemon">
                        <span class="number">#003</span>
                        <span class="name">${pokemon.name}</span>
                        <div class="detail">
                            <ul class="types">
                                <li class="type">Grass</li>
                                <li class="type">Poison</li>
                            </ul>
                            <img src="/assets/img/${pokemon.name}.png" alt="${pokemon.name}"></div>`
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