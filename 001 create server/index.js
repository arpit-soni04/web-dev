const http = require('http');
const {data, user} = require('./support');

console.log(user);

http.createServer((req, res)=>{

    if(req.method === 'GET' && req.url === '/insert'){
        res.end('data inserted');  
    }else if(req.method ==='POST' && req.url === '/read-data'){
        res.end(JSON.stringify(data));
    }
    else{
        res.end('invalid api');
    }
    
}).listen(4000, ()=>{
    console.log('server is running on port 4000')
});

