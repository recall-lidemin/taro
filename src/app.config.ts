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
        pagePath: 'components/bar/index',
        text: '首页',
        iconPath: '',
        selectedIconPath: '',
      },
      {
        pagePath: 'components/bar2/index',
        text: '首页',
        iconPath: '',
        selectedIconPath: '',
      },
    ],
  },
  usingComponents: {},
  subpackages: [
    {
      root: 'pages',
      pages: ['login/index', 'home/index'],
    },
  ],
}
