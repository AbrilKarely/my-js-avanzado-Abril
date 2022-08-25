var unirest = require("unirest");

var req = unirest ("POST", "https://ecume.herokuapp.com/apiECUME/userRegister")
    .headers({
        "Content-Type" : "application/json"
    })
    .send(JSON.stringify({
        
    }))