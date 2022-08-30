import app from "./app"

const main = () =>{
    app.listen(app.get("port"));
    console.log('Server on por : ${app.get("port")}');
};

main();