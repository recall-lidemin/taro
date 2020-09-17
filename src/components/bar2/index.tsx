import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { login } from '../../service/login'

const Login: React.FC = () => {
  const [useName, setUseName] = useState<string>('')
  const fetchName = async () => {
    const res = await login()

    setUseName(res.data.admin)
  }
  useEffect(() => {
    fetchName()
  }, [])
  return <View>{useName}</View>
}

export default Login
