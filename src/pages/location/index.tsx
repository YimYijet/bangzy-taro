import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Map, Text, Button } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { getCurLocation, setOpened } from '@/actions/location'
import { getAuth } from '@/actions/userInfo'

import { qqmapsdk } from '@/lib'

import './index.scss'

import locationPoint from '@/assets/icon/location-point.png'

import './detail/'

type PageStateProps = {
    user: {
        authSetting: {}
    },
    location: {
        curLocation: {}
    }
}

type PageDispatchProps = {
    getCurLocation: (curLocation) => any
    getAuth: (wechatInfo) => any
}

type PageOwnProps = {}

type PageState = {
    value: string
    isOpened: boolean
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Location {
    props: IProps
}

async function getLocation(self) {
    const location = await Taro.getLocation()
    self.props.getCurLocation(location)
    qqmapsdk.reverseGeocoder({
        location: location || '',
        success: function(res) {
            console.log(res)
        }
    }) 
}

@connect(({ user, location }: PageStateProps) => ({
    user,
    location,
}), (dispatch) => ({
    getCurLocation(curLocation) {
        dispatch(getCurLocation(curLocation))
    },
    getAuth(wechatInfo) {
        dispatch(getAuth(wechatInfo))
    },
}))
class Location extends Component {
    public config: Config = {
        backgroundColor: "#eee",
        navigationBarTitleText: "附近",
        navigationBarTextStyle: "white",
        navigationBarBackgroundColor: '#353535',
    }

    public state: PageState = {
        value: '',
        isOpened: false,
    }

    constructor(props) {
        super(props)
    }

    public handleSearch(e) {
        console.log(e)
        this.setState({
            isOpened: true
        })
    }

    public onChange(value) {
        this.setState({
            value
        })
    }

    public handleTap(e) {
        console.log('tap', e)
        Taro.navigateTo({
            url: './detail/index?title=宿迁中学咨询点'
        })
    }

    public getCurLocation(e) {
        this.props.getAuth(e.detail.authSetting)
        this.setState({
            isOpened: false
        })
    }

    public componentWillMount() {
        if (this.props.user.authSetting['scope.userLocation']) {
            getLocation(this)
        } else {
            this.setState({
                isOpened: true
            })
        }
    }

    public componentWillReceiveProps() {
        if (this.props.user.authSetting['scope.userLocation'] && !Object.keys(this.props.location.curLocation).length) {
            getLocation(this)
        }
    }

    public componentWillUpdate() {
        console.log(this.state.isOpened)
    }

    public componentDidShow() {
        console.log('hi')
    }

    public componentDidHide() {
        console.log('bye')
    }

    public render() {
        const { value, isOpened } = this.state
        console.log(isOpened)
        return (
            <View>
                <View>
                    <AtSearchBar
                        placeholder="搜索咨询地点"
                        value={value}
                        onChange={this.onChange.bind(this)}
                        onActionClick={this.handleSearch.bind(this)}
                    />
                </View>
                <Map 
                    className="location-map" 
                    showLocation={true}
                    longitude={120.63212} 
                    latitude={31.26249}
                    scale={18}
                    markers={[{
                        id: 0,
                        longitude: 120.63,
                        latitude: 31.26,
                        iconPath: locationPoint,
                        width: 24,
                        height: 24,
                        callout: {
                            content: '宿迁中学咨询点',
                            color: '#353535',
                            fontSize: 13,
                            borderRadius: 16,
                            borderWidth: 1,
                            borderColor: '#e6e6e6',
                            bgColor: '#fff',
                            padding: 9,
                            display: 'ALWAYS',
                            textAlign: 'center'
                        }
                    }]}
                    onCalloutTap={this.handleTap.bind(this)}
                >
                </Map>
            </View>
        )
    }
}

export default Location as ComponentClass<PageOwnProps, PageState>