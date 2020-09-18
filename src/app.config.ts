export default {
  pages: ['pages/login/index', 'pages/home/index', 'pages/mine/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    backgroundColor: '#fff',
    selectedColor: '#387cd3',
    color: '#807f80',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: './assets/images/icon-home.png',
        selectedIconPath: './assets/images/icon-home1.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: './assets/images/icon-client.png',
        selectedIconPath: './assets/images/icon-client1.png',
      },
    ],
  },
  usingComponents: {},
  subpackages: [],
}
