import {Server} from "./server";

let server = new Server().app;  //creates an instance of Server class
let port = process.env.PORT || 5000;
server.listen(port,()=>{
   console.log('server is running')
})