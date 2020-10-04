import React from 'react'
import { View } from '@tarojs/components'
import 'taro-ui/dist/style/index.scss'
import './app.less'

export default ({ children }) => {
  return <View style={{width: '100vw',height: '100vh'}}>
    {children}
  </View>
}
