import React, { useState } from 'react'
import { AtTabBar } from 'taro-ui'

const Layout = ({ children }) => {
  const [current, setCurrent] = useState<any>()
  const handleClick = (value) => {
    setCurrent(value)
  }

  return (
    <div className="body">
      {children}
      <AtTabBar
        tabList={[
          { title: '待办事项', text: 8 },
          { title: '拍照' },
          { title: '通讯录', dot: true },
        ]}
        onClick={handleClick}
        current={current}
      />
    </div>
  )
}
export default Layout
