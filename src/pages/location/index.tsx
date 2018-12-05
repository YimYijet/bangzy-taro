import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Map, Text } from '@tarojs/components'
import { AtSearchBar, AtFloatLayout } from 'taro-ui'
import { connect } from '@tarojs/redux'

// import { getUserInfo, getWechatInfo } from '../../actions/userInfo'

import './index.scss'

import locationPoint from '../../assets/icon/location-point.png'

type PageStateProps = {

}

type PageDispatchProps = {

}

type PageOwnProps = {}

type PageState = {
    value: string
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
          navigationBarTitleText: "附近",
          navigationBarTextStyle: "white",
          navigationBarBackgroundColor: '#353535',
    }

    constructor(props) {
        super(props)
        this.onChange.bind(this)
        this.handleSearch.bind(this)
    }

    public state: PageState = {
        value: ''
    }

    public handleSearch(e) {
        console.log(e)
    }

    public onChange(value) {
        this.setState({
            value
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
                    longitude={116.46} 
                    latitude={39.92}
                    markers={[{
                        longitude: 116,
                        latitude: 39,
                        iconPath: locationPoint
                    }]}
                >
                </Map>
                {/* <AtFloatLayout 
                    title={}
                    isOpened={}
                    onClose={}>
                </AtFloatLayout> */}
            </View>
        )
    }
}

export default User as ComponentClass<PageOwnProps, PageState>