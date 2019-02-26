import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView, Text } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import { connect } from '@tarojs/redux'

import UserInfo from './userInfo'

// import { getUserInfo, getWechatInfo } from '../../actions/userInfo'

import './index.scss'

type PageStateProps = {

}

type PageDispatchProps = {

}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface User {
    props: IProps
}

@connect(() => ({}), (dispatch) => ({

}))
class User extends Component {
    public config: Config = {
        backgroundTextStyle: "dark",
        backgroundColor: '#eee',
        navigationBarTitleText: "我的",
        navigationBarTextStyle: "white",
        navigationBarBackgroundColor: '#353535',
        enablePullDownRefresh: true,
    }

    constructor(props) {
        super(props)
    } 

    public onPullDownRefresh() {
        console.log('fuck')
        setTimeout(() => {
            Taro.stopPullDownRefresh()
        }, 2000)
    }

    public handleLinkTo(url, e) {
        console.log(e)
        Taro.navigateTo({
            url
        })
    }
    
    public render() {

        return (
            <ScrollView scrollY>
                <View style="background: #fff;">
                    <UserInfo link="../index/index"></UserInfo>
                </View>
                <Text>\n</Text>
                {/* <AtList>
                    <AtListItem
                        title="我的钱包"
                        extraText="充值"
                        iconInfo={{
                            prefixClass: 'icon',
                            value: "wallet",
                        }}
                        onClick={this.handleLinkTo.bind(this, '../index/index')}
                    />
                    <AtListItem
                        title="余额"
                        extraText="￥121"
                        iconInfo={{
                            prefixClass: 'icon',
                            value: "YUAN",
                        }}
                    />
                    <AtListItem
                        title="会员卡"
                        iconInfo={{
                            prefixClass: 'icon',
                            value: "idcard",
                        }}
                    />
                </AtList> */}
                <AtList>
                    <AtListItem
                        title="我的咨询"
                        iconInfo={{
                            prefixClass: 'icon',
                            value: "calendar-check",
                        }}
                    />
                    {/* <AtListItem
                        title="我的评价"
                        iconInfo={{
                            prefixClass: 'icon',
                            value: "solution",
                        }}
                    /> */}
                </AtList>
                <Text>\n</Text>
                <AtList>
                    <AtListItem
                        title="客服中心"
                        iconInfo={{
                            prefixClass: 'icon',
                            value: "comment",
                        }}
                    />
                    {/* <AtListItem
                        title="授权设置"
                        iconInfo={{
                            prefixClass: 'icon',
                            value: "setting",
                        }}
                    /> */}
                </AtList>
            </ScrollView>
        )
    }
}

export default User as ComponentClass<PageOwnProps, PageState>