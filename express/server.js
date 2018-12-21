const express = require('express');
const expressStatic = require('express-static');

let server = express();
server.listen(8080);
const USER = {
    '张三': '111',
    '李四': '222',
    '王五': '333'
};

server.get('/login',function (req,res) {
    console.log('get')
    let user = req.query['user'];
    let pass = req.query['pass'];
    if(!USER[user]){
        res.send({'status': false, 'msg': "用户不存在"})
    }else{
        if(USER[user] !== pass){
            res.send({'staus': false, "msg": "密码不正确"})
        }else{
            res.send({'status': true})
        }
    }

    res.end()
});

server.get('/',function (req,res) {
   res.write('123');
   res.end()
});

server.use(expressStatic('./www'));




