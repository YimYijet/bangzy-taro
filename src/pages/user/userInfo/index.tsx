import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Navigator, Text } from '@tarojs/components'
import { AtButton, AtAvatar, AtIcon } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { getUserInfo, getWechatInfo } from '../../../../actions/userInfo'

import './index.scss'
// 导入taro-ui flex样式
import 'taro-ui/dist/weapp/css/index.css'

type PageStateProps = {
    user: {
        wechatInfo: {
            // 昵称
            nickName: string
            // 头像地址
            avatarUrl: string
            // 市
            city: string
            // 省
            province: string
            // 国
            country: string
            // 语言
            language: string
            // 性别
            gender: number
        },
        userInfo: {
            
        }
    }
}

type PageDispatchProps = {
    getWechatInfo: (wechatInfo) => any
}

type PageOwnProps = {
    link: string
}

type PageState = {
    canIUse: boolean
    hasLogin: boolean
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface User {
    props: IProps
}

@connect(({ user }: PageStateProps) => ({
    user
}), (dispatch) => ({
    getWechatInfo(wechatInfo) {
        dispatch(getWechatInfo(wechatInfo))
    }
}))
class User extends Component {

    public state: PageState = {
        canIUse: Taro.canIUse('button.open-type.getUserInfo'),
        hasLogin: false
    }

    public constructor(props) {
        super(props)
    }

    public getUserInfo(e) {
        this.props.getWechatInfo(e.detail.userInfo)
    }

    public render() {
        const { canIUse, hasLogin } = this.state,
        { user: { wechatInfo, userInfo }, link } = this.props
        return (
            canIUse && !!wechatInfo.nickName ? (
                <Navigator url={link} className="userInfo userInfo-panel">
                    <View className="userInfo-cell">
                        <AtAvatar circle image={wechatInfo.avatarUrl} size="large"></AtAvatar>
                        <View className="userInfo-info">
                            <Text>{wechatInfo.nickName}</Text>
                            {
                                hasLogin ? <Text className="userInfo-account">{userInfo}</Text> :
                                <Text className="userInfo-account">未绑定</Text>
                            }
                        </View>
                    </View>
                    <AtIcon className="at-col at-col-1" value="chevron-right"></AtIcon>
                </Navigator>) : (
                <View className="at-row">
                    <View className="at-col-6 at-col__offset-3 userInfo">
                        <AtButton
                            type='primary' 
                            openType="getUserInfo" 
                            onGetUserInfo={this.getUserInfo.bind(this)}>微信 登录
                        </AtButton>
                    </View>
                </View>)
        )
    }
}

export default User as ComponentClass<PageOwnProps, PageState>