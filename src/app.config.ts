export default {
  pages: ['pages/login/index', 'pages/home/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#000',
    borderStyle: 'white',
    selectedColor: '#fff',
    backgroundColor: '#185000',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: '',
        selectedIconPath: '',
      },
      {
        pagePath: 'pages/login/index',
        text: '登录',
        iconPath: '',
        selectedIconPath: '',
      },
    ],
  },
  usingComponents: {},
}
