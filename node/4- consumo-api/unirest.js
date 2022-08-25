var unirest = require ("unirest");

var require = unirest ("GET","https://rickandmortyapi.com/api/character/1")
    .end(function (response){
        if (response.error) throw new Error (response.error);
        console.log (response.body)
    })