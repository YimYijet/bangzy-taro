import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Navigator, Text } from '@tarojs/components'

import './index.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
    border?: boolean
    icon?: string
    text?: string
    link: string
    msgCount?: string
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface TabBar {
    props: IProps
}

class TabBar extends Component {
    static defaultProps = {
        border: false,
    }
    render() {
        const { border, icon, text, link, msgCount } = this.props
        return (
            <Navigator url={link} className={`tab-item ${border && 'border'}`}>
                <View className="cell">
                    <Text className={`cell-icon iconfont icon-${icon}`} ></Text>
                    <Text className="cell-text">{text}</Text>
                </View>
                {!!msgCount && <View className="msg-count">{msgCount}</View>}
            </Navigator>
        )
    }
}

export default TabBar as ComponentClass<PageOwnProps, PageState>