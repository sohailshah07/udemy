const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req);
    // process.exit();
});
server.listen(3000, ()=>{
    console.log('server up and running')
});