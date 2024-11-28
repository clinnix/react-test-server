const Mock = require("mockjs");

module.exports = [
  {
    url : '/api/test',  // 配置监听的路径
    method: 'get',
    data : Mock.mock({
        status: 200,   // 设置返回status 
        data: {
            name: Mock.Random.cname(),
        }
    })
  }
];
