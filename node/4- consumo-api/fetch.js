const fetch = require("cross-fetch")

fetch("https://rickandmortyapi.com/api/character/")
    .then((response) =>{
        return response.json()
    }).then((resp) =>{
        console.log(resp)
    })