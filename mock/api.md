# API 设计

## 用户功能

### 获取用户信息

- method `get`
- path `/api/user/info`
- response `{code: 0, data: {...}}` 

### 注册

- method `post`
- path `/api/user/register`
- request body `{username, password, nickname}`
- response `{code: 0}`

### 登录

- method `post`
- path `/api/user/login`
- request body `{username, password}`
- response `{code: 0, token}`

## 问卷功能

### 创建问卷

- method `post`
- path `/api/question`
- request body - 无 （点击一个按钮即可创建，title)
- response `{code: 0, data: {id}}`

### 获取单个问卷

- method `get`
- path `/api/question/:id`
- response `{code: 0, data: {id, title ...}}`

### 获取问卷列表

- method `get`
- path `/api/question`
- response: `{code: 0, data: {list:[...]}}`

### 更新问卷信息

- method `patch`
- path `/api/question/:id`
- response: `{code: 0}`

// 删除是假删除，isDelete 属性

### 批量彻底删除问卷

- method `delete`
- path `/api/question`
- request body `{ids: [...]}`
- response: `{code: 0}`

### 复制问卷
- method `post`
- path `/api/question/duplicate/:id`
- response: `{code: 0}`

## 小结

- 使用

- {code data msg}