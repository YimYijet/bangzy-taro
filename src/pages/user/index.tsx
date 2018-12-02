import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'

// import TabBar from '../../components/TabBar'

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
    
    handleChange = e => {
        console.log('Change Switch', e)
    }

    handleClick = e => {
        console.log('Click Item', e)
    }

    render() {
        return (
            <ScrollView>
                <AtButton >aaa</AtButton>
            </ScrollView>
        )
    }
}

export default User as ComponentClass<PageOwnProps, PageState>