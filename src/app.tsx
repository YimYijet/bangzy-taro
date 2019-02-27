import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import configStore from './store'
import { reverseGeocoder } from './lib'

import { getAuth, getWechatInfo } from './actions/userInfo' 
import { getCurLocation, getCurCity } from './actions/location'

import './app.scss'
// 导入taro-ui flex样式
import 'taro-ui/dist/weapp/css/index.css'
// 引入自定义icon样式
import './styles/iconfont.scss'

const store = configStore()

class App extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    public config: Config = {
        pages: [
            // 'pages/discovery/index',
            'pages/location/index',
            'pages/user/index',
            'pages/index/index',
            'pages/location/detail/index'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            borderStyle: 'white',
            color: '#888',
            selectedColor: '#353535',
            list: [
              // {
              //   pagePath: 'pages/discovery/index',
              //   text: '发现',
              //   selectedIconPath: 'assets/icon/compass-fill.png',
              //   iconPath: 'assets/icon/compass.png'
              // },
                {
                    pagePath: 'pages/location/index',
                    text: '附近',
                    selectedIconPath: 'assets/icon/location-fill.png',
                    iconPath: 'assets/icon/location.png'
                },
                {
                    pagePath: 'pages/user/index',
                    text: '我的',
                    selectedIconPath: 'assets/icon/smile-fill.png',
                    iconPath: 'assets/icon/smile.png'
                }
            ]
        },
          permission: {
            "scope.userLocation": {
              desc: "需要获取您的地理位置，请确认授权"
            }
          }
    }

    public async componentWillMount() {
        try {
            // 获取授权
            const auth = await Taro.getSetting()
            store.dispatch(getAuth(auth.authSetting))
            // 授权通过获取微信用户信息
            if (auth.authSetting['scope.userInfo']) {
                const user = await Taro.getUserInfo()
                store.dispatch(getWechatInfo(user.userInfo))
            }
            // 授权获取位置信息
            const location = await Taro.getLocation()
            store.dispatch(getCurLocation(location))
            const city = await reverseGeocoder(location)
            store.dispatch(getCurCity(city))
        } catch (error) {
            console.log(error)
        }
    }

    public render() {
        return (
            <Provider store={store}></Provider>
        )
    }
}

Taro.render(<App />, document.getElementById('app'))
