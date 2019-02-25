import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Map, Text } from '@tarojs/components'
import { AtSearchBar, AtFloatLayout } from 'taro-ui'
import { connect } from '@tarojs/redux'

// import { getUserInfo, getWechatInfo } from '../../actions/userInfo'

import './index.scss'

import locationPoint from '../../assets/icon/location-point.png'

import './detail/'

type PageStateProps = {

}

type PageDispatchProps = {

}

type PageOwnProps = {}

type PageState = {
    value: string
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Location {
    props: IProps
}

@connect(() => ({}), (dispatch) => ({

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
        this.onChange.bind(this)
        this.handleSearch.bind(this)
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

    public render() {
        const { value } = this.state
        return (
            <View>
                <View>
                    <AtSearchBar
                        placeholder="搜索咨询地点"
                        value={value}
                        onChange={this.onChange}
                        onActionClick={this.handleSearch}
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
            </View>
        )
    }
}

export default Location as ComponentClass<PageOwnProps, PageState>