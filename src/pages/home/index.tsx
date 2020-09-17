import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { login } from '../../service/login'

const Home: React.FC = () => {
  const [useName, setUseName] = useState<any>()
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
