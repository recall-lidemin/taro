import Taro, { request } from '@tarojs/taro'

interface MyOption {
  loading?: boolean
}

const serviceUrl = 'http://localhost:3001/'
const ERR_OK = 0
const ERR_TOKEN = 401 // token失效或者丢失 需要重新登录
const ERR_LOGIN = 1010 // token失效或者丢失 需要重新登录
const codeMessage = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户信息失效，请重新登录',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

function service<T = any, U = any>({
  url,
  data,
  method,
  loading = true,
  ...option
}: request.Option<U> & MyOption) {
  const token = Taro.getStorageSync('token')
  if (loading) {
    Taro.showLoading({
      title: '加载中',
    })
  }
  return new Promise((resolve, reject) => {
    Taro.request({
      url: serviceUrl + url,
      data,
      method,
      header: {
        Authorization: `Bearer ${token}`,
      },
      success: (res) => {
        console.log(res)

        if (res.statusCode === 200) {
          if (res.data.code === 0) {
            Taro.hideLoading()
            resolve(res.data)
          } else if (res.data.code === ERR_TOKEN) {
            Taro.hideLoading()
            // 移除旧token
            // 跳转到登录页
          } else {
            Taro.hideLoading()
            Taro.showToast({
              title: '请求失败！',
              duration: 2000,
            })
            resolve(res.data)
          }
        } else {
          Taro.hideLoading()
          Taro.showToast({
            title: codeMessage[res.statusCode],
            duration: 2000,
          })
        }
      },
      fail: (res) => {
        Taro.hideLoading()
        Taro.showToast({
          title: codeMessage[res.errMsg],
          duration: 2000,
        })
        reject(res)
      },
      complete: () => {
        Taro.hideLoading()
      },
      ...option,
    })
  })
}

export default service
