import Taro from '@tarojs/taro'
import { View, Form, Button } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { AtInput } from 'taro-ui'
import { login } from '../../service/login'
import './index.less'

interface Login {
  userName: string
  password: string
}
const Login: React.FC = () => {
  const [user, setUser] = useState<Login>({
    userName: '',
    password: ''
  })

  const userNameChange = (val: string) => {
    setUser({ ...user, userName: val })
  }
  const passwordChange = (val: string) => {
    setUser({ ...user, password: val })
  }

  const onSubmit = async (event: any) => {
    Taro.switchTab({
      url: '/pages/home/index'
    })
    // try {
    //   const res = await login()
    //   const { data } = res
    //   console.log(res)
    //   if (user.userName === data.userName && user.password === data.password) {
    //     Taro.switchTab({
    //       url: '/pages/home/index',
    //     })
    //   } else {
    //     Taro.showToast({
    //       title: '登录失败！',
    //       icon: 'none',
    //     })
    //   }
    // } catch (error) {
    //   Taro.showToast({
    //     title: '获取信息失败！',
    //     icon: 'none',
    //   })
    // }
  }

  return (
    <View className="body">
      <View className="logo">logo</View>
      <View className="form">
        <Form onSubmit={onSubmit}>
          <AtInput
            required
            name="userName"
            title="用户名"
            type="text"
            placeholder="请输入用户名"
            value={user.userName}
            onChange={userNameChange}
          />
          <AtInput
            required
            name="password"
            title="密码"
            type="password"
            placeholder="请输入用户名"
            value={user.password}
            onChange={passwordChange}
          />
          <Button
            type="primary"
            size="default"
            formType="submit"
            style={{ margin: '10px 0', width: '100%' }}
          >
            登录
          </Button>
        </Form>
      </View>
    </View>
  )
}

export default Login
