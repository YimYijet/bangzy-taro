import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Navigator, Text, Icon } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
    icon: string
    text: string
    link: string
    msgCount: string
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface TabBar {
    props: IProps
}

class TabBar extends Component {
    render() {
        const { icon, text, link, msgCount } = this.props
        return (
            <Navigator url={link} className="panel">
                <View className="cell">
                    <Icon className={`cell-icon iconfont icon-${icon}`} type="info"></Icon>
                    <Text className="cell-text">{text}</Text>
                </View>
                {!!msgCount && <View className="msg-count">{msgCount}</View>}
            </Navigator>
        )
    }
}

export default TabBar as ComponentClass<PageOwnProps, PageState>