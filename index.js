let express = require('express'); //引入express模块
let Mock = require('mockjs'); //引入mock模块
const test = require('./mock/test')
const question = require('./mock/question')
const test1 = require('./mock/test1')

let app = express(); //实例化express

console.log(test)

var dataArr = [test1, ...test, ...question]

async function getRes(req, res){
    return new Promise(resolve => {
        setTimeout(() => {
            res.json(item.data);
            resolve(req,res)
        }, 1000)
    })
}

for(let i = 0;i < dataArr.length;i++){
    let item = dataArr[i];
    
    app.all(item.url, function(req, res, next) {
        
        res.setTimeout(1000, function(){
            res.json(item.data);
        });
    });
}


/*为app添加中间件处理跨域请求*/
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header('Access-Control-Allow-Headers', 'Content-Type');
next();
});

/**
* 监听8090端口
*/
app.listen('8090');

