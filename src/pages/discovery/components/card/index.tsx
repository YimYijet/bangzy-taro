import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView, Text } from '@tarojs/components'
// import { AtList, AtListItem, AtIcon } from 'taro-ui'
import { connect } from '@tarojs/redux'

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
    config: Config = {
        window: {
            backgroundColor: "#eee"
          },
          navigationBarTitleText: "发现",
          navigationBarTextStyle: "white",
          navigationBarBackgroundColor: '#353535',
    }
    render() {
        return (
            <View>
                
                <ScrollView style="height: 110vh;">这是新闻页</ScrollView>
            </View>
        )
    }
}

export default User as ComponentClass<PageOwnProps, PageState>