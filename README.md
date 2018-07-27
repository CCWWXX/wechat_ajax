# 微信小程序wx.request简易插件
 简化了接口的编写，可统一header<br>
## How to use
```
const api = require('path/to/api.js');
let data = {};
  api.request(
          '/the/path', 
          "POST", 
          { 
            data
          }, 
          res => {
            console(res)
          },
          failRes => {
            console.log(failRes)
          }
      )
```
## params
参数描述

| param | type | description |
| ---------- | --------- | -------- |
| _url | String | 请求地址 |
| _methos | String | 请求类型 |
| _data | Object | 请求数据 |
| callback | Function| 请求成功回调 |
| failcallback | Function| 请求失败回调，可不写，默认为提示服务器开小差 |

## todo
- [ ] ajax请求
- [ ] 失败提示
- [ ] loading显示

