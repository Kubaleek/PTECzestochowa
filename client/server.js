const express = require('express');
const next = require('next');

const app = next({dev:false});
const handle = app.getRequestHandler();

app.prepare().then(()=>{
const server = express();

server.all('/api/auth/:path',(req,res)=>{
const actualPage = 'api/auth/[...nextauth]';
const queryParams = {path:req.params.path}
app.render(req,res,actualPage,queryParams);
})

server.all('*',(req,res)=>{
return handle(req,res);
});

server.listen(3000);
})
