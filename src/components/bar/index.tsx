import React, { useEffect, useState } from 'react'
import { Current } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { login } from '../../service/login'

const Home: React.FC = () => {
  const [useName, setUseName] = useState<any>()
  console.log(Current)

  const fetchName = async () => {
    const res = await login()
    setUseName(res.data.admin)
  }
  useEffect(() => {
    fetchName()
  }, [])
  return <View>{useName}</View>
}

export default Home
