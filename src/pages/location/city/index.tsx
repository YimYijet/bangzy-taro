import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'

type PageStateProps = {
    location: {
        curCity: any
    }
}

type PageDispatchProps = {

}

type PageOwnProps = {

}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface City {
    props: IProps
}

@connect(() => ({}), (dispatch) => ({}))
class City extends Component {

    public render() {
        const { location: { curCity } } = this.props
        return (
            <Text>{curCity.result.ad_info.city}</Text>
        )
    }
}

export default City as ComponentClass<PageOwnProps, PageState>