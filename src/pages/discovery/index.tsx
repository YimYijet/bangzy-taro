import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { connect } from '@tarojs/redux'

// import { getUserInfo, getWechatInfo } from '../../actions/userInfo'

import './index.scss'

type PageStateProps = {

}

type PageDispatchProps = {

}

type PageOwnProps = {}

type PageState = {
    current
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface User {
    props: IProps
}

@connect(() => ({}), (dispatch) => ({

}))
class User extends Component {
    public config: Config = {
        window: {
            backgroundColor: "#eee"
        },
        navigationBarTitleText: "发现",
        navigationBarTextStyle: "white",
        navigationBarBackgroundColor: '#353535',
    }

    public state: PageState = {
        current: 0
    }

    public handleClick(value) {
        this.setState({
            current: value
        })
    }

    public render() {
        const tabList = [{ title: '最新' }, { title: '专业' }, { title: '院校' }, {title: '招生'}]
        return (
            <View>
                <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane current={this.state.current} index={0} >
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={1}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={2}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={3}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页四的内容</View>
                    </AtTabsPane>
                </AtTabs>
                <ScrollView style="height: 110vh;">这是新闻页</ScrollView>
            </View>
        )
    }
}

export default User as ComponentClass<PageOwnProps, PageState>