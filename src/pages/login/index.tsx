import Taro from '@tarojs/taro'
import React from 'react'
import { View } from '@tarojs/components'
import { login } from '../../service/login'
import style from './index.less'

class Login extends React.Component {
  state = {
    loading: true,
    threads: [],
  }

  async componentDidMount() {
    try {
      const res = await login()
      console.log(res)
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误',
      })
    }
  }

  render() {
    return <View className={`${style['login']}`}>登录页面</View>
  }
}

export default Login
