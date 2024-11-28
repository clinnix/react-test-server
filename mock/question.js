const Mock = require("mockjs");
module.exports = [
  {
    url: "/api/question/:id",
    method: "get",
    data: Mock.mock({
      code: 0, // 设置返回status
      data: {
        id: Mock.Random.id(),
        title: Mock.Random.ctitle(),
      },
      msg: '错误测试'
    }),
  },
  {
    url: "/api/question",
    method: "post",
    data: {
      code: 200,
      data: {
        id: Mock.Random.id(),
      },
    },
  },
];
