import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Map, Text, Button } from '@tarojs/components'
import { AtSearchBar, AtFloatLayout, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { getCurLocation, setOpened } from '../../actions/location'
import { getAuth } from '../../actions/userInfo'

import { qqmapsdk } from '../../lib'

import './index.scss'

import locationPoint from '../../assets/icon/location-point.png'

import './detail/'

type PageStateProps = {
    user: {
        authSetting: {}
    },
    location: {
        isOpened: boolean
        curLocation: {}
    }
}

type PageDispatchProps = {
    getCurLocation: (curLocation) => any
    getAuth: (wechatInfo) => any
    setOpened: (isOpened) => any
}

type PageOwnProps = {}

type PageState = {
    value: string
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Location {
    props: IProps
}

@connect(({ user, location }: PageStateProps) => ({
    user,
    location
}), (dispatch) => ({
    getCurLocation(curLocation) {
        dispatch(getCurLocation(curLocation))
    },
    getAuth(wechatInfo) {
        dispatch(getAuth(wechatInfo))
    },
    setOpened(isOpened) {
        dispatch(setOpened(isOpened))
    },
}))
class Location extends Component {
    public config: Config = {
        window: {
            backgroundColor: "#eee"
          },
          navigationBarTitleText: "附近",
          navigationBarTextStyle: "white",
          navigationBarBackgroundColor: '#353535',
    }

    public state: PageState = {
        value: '',
    }

    constructor(props) {
        super(props)
    }

    public handleSearch(e) {
        console.log(e)
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
        this.props.setOpened(false)
    }

    public async componentWillReceiveProps() {
        if (this.props.user.authSetting['scope.userLocation'] && !Object.keys(this.props.location.curLocation).length) {
            const location = await Taro.getLocation()
            this.props.getCurLocation(location)
            qqmapsdk.reverseGeocoder({
                location: location || '',
                success: function(res) {
                    console.log(res)
                }
            }) 
        }
    }

    public render() {
        const { value } = this.state, { location: {
            isOpened
        } } = this.props
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
                    show-compass
                    longitude={116.46} 
                    latitude={39.92}
                    markers={[{
                        id: 0,
                        longitude: 116.46,
                        latitude: 39.92,
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
                <AtModal isOpened={isOpened}>
                    <AtModalHeader>授权提醒</AtModalHeader>
                    <AtModalContent>
                        需要获取您的地理位置，请确认授权
                    </AtModalContent>
                    <AtModalAction>
                        <Button>取消</Button>
                        <Button 
                            openType="openSetting" 
                            onOpenSetting={this.getCurLocation.bind(this)}>确定</Button>
                    </AtModalAction>
                </AtModal>
            </View>
        )
    }
}

export default Location as ComponentClass<PageOwnProps, PageState>