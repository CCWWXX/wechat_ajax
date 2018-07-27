const app = getApp();
let request = (_url, _type, _data, callback, failcallback ) => {
  
  wx.showLoading()
  let host = app.globalData.host
  if (host) {
    let url = app.globalData.host  + _url
  } else {
    let url = _url
  }
  wx.request({
    url: url,
    method: _type,
    data: _data,
    header: {
      'content-type': 'application/json',
      'appletId': '',
      'token': ''
    },
    success: ((res) => {
      wx.hideLoading()
      console.log(res.statusCode)
      if ((res.statusCode == 200 || res.statusCode == 201) && callback) {
        callback(res)
      }else{
        if(failcallback){
          failcallback(res)
        }else{
           wx.showToast({
              title: '服务器开小差',
              icon: 'none'
          })
        }
          
      }
    }),
    fail: ((res) => {
      wx.hideLoading()
      failcallback(res)
         wx.showToast({
          title: '服务器开小差',
          icon: 'none'
        })
    })
  })
}
module.exports = {
  request: request
}