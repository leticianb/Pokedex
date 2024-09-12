const offset = 0;
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url).then(function(response) { //try, fetch sempre usa get
        console.log(response)
    })
    .catch(function(error) { //catch(error)
        console.log(error)
    })
    .finally(function() {
        console.log('Requisição concluída') //finally
    })