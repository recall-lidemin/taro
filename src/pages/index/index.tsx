import Taro from '@tarojs/taro'
import React from 'react'
import { View } from '@tarojs/components'
import { login } from '../../service/login'
import './index.less'

class Index extends React.Component {
  config = {
    navigationBarTitleText: '首页',
  }

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
    return <View className="index">123</View>
  }
}

export default Index
