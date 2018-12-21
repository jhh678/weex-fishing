let baseUrl = 'http://172.168.1.234:8180/mockjs/2'
let apiUrls = {
  getIndexGoods: '/shop/index/getGoods'
}

export const apiConfig = {
  urls: ((urls) => {
    Object.keys(urls).map((item) => {
      urls[item] = baseUrl + urls[item]
    })
    return urls
  })(apiUrls)
}

/**
 * Created by jhh678 on 2018/07/14.
 */
export const tabPageConfig = {
  tabTitles: [{
      title: '关注'
    },
    {
      title: '云店'
    },
    {
      title: '云医'
    },
    {
      title: '云商'
    },
    {
      title: '云服'
    }
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#333333',
    activeTitleColor: '#1C69D3',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: false,
    width: 150,
    height: 88,
    fontSize: 34,
    hasActiveBottom: true,
    activeBottomColor: '#1C69D3',
    activeBottomHeight: 6,
    activeBottomWidth: 68,
    textPaddingLeft: 10,
    textPaddingRight: 10
  }
}

export const tabBarConfig = {
  // 正常模式的tab title配置
  tabTitles: [{
      isPage: true,
      title: '首页',
      icon: 'home_default',
      activeIcon: 'home_selected'
    },
    {
      isPage: true,
      title: '视频',
      icon: 'video_default',
      activeIcon: 'video_selected'
    },
    {
      isPage: false,
      title: '发帖',
      icon: 'post'
    },
    {
      isPage: true,
      title: '发现',
      icon: 'find_default',
      activeIcon: 'find_selected'
    },
    {
      isPage: true,
      title: '我的',
      icon: 'my_default',
      activeIcon: 'my_selected'
    }
  ],
  tabStyles: {
    bgColor: '#FAFAFA',
    titleColor: '#666666',
    activeTitleColor: '#666666',
    activeBgColor: '#FAFAFA',
    iconWidth: 70,
    iconHeight: 70,
    width: 150,
    height: 98,
    fontSize: 20,
    textPaddingLeft: 10,
    textPaddingRight: 10
  }
}
