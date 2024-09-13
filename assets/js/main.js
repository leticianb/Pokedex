const offset = 0;
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url).then((response) => //try, fetch sempre usa get, por padrao fetch sempre retorna string
        response.json()
    )
    .then((jsonbody) => jsonbody.results)
    .then((jsonbody) => { //try, fetch sempre usa get, por padrao fetch sempre retorna string
        debugger
        console.log(jsonbody)
    })
    .catch((error) => //catch(error)
        console.log(error)
    )
    // .finally(function() {
    //     console.log('Requisição concluída') //finally
    // })