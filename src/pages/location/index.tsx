import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { getCurLocation, setOpened } from '@/actions/location'
import { getAuth } from '@/actions/userInfo'


import './index.scss'

import './detail/'
import IMap from './map'

type PageStateProps = {
    authSetting: {}
    curLocation: any
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

@connect((state) => ({
    authSetting: state.user.authSetting,
    curLocation: state.location.curLocation,
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
        const { value, isOpened } = this.state, { curLocation } = this.props
        console.log(isOpened)
        return (
            <View>
                <View className="loc-title">
                    <View className="loc-city"></View>
                    <View className="loc-weather"></View>
                </View>
                <View className="loc-search">
                    <AtSearchBar
                        placeholder="搜索咨询地点"
                        value={value}
                        onChange={this.onChange.bind(this)}
                        onActionClick={this.handleSearch.bind(this)}
                    />
                </View>
                <View className="loc-map">
                    <IMap></IMap>
                </View>
            </View>
        )
    }
}

export default Location as ComponentClass<PageOwnProps, PageState>