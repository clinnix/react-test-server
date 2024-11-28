const Mock = require("mockjs");
module.exports = [
  {
    //获取单个问卷信息
    url: "/api/question/:id",
    method: "get",
    data: Mock.mock({
      code: 0, // 设置返回status
      data: {
        id: Mock.Random.id(),
        title: Mock.Random.ctitle(),
      },
    //   msg: '错误测试'
    }),
  },
  {
    //创建问卷
    url: "/api/question",
    method: "post",
    data: {
      code: 0,
      data: {
        id: Mock.Random.id(),
      },
    },
  },
];
