import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Map } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { qqmapsdk } from '@/lib'

import { getAuth } from '@/actions/userInfo'
import { getCurLocation, setOpened } from '@/actions/location'

import './index.scss'

import locationPoint from '@/assets/icon/location-point.png'

type PageStateProps = {
    location: {
        curLocation: any
    }
    authSetting: {}
}

type PageDispatchProps = {
    getLocation: (location) => any
    getAuth: (auth) => any
}

type PageOwnProps = {

}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface City {
    props: IProps
}

async function getLocation(self) {
    const location = await Taro.getLocation()
    self.props.getLocation(location)
    qqmapsdk.reverseGeocoder({
        location: location || '',
        success: function(res) {
            console.log(res)
        }
    }) 
}

@connect((state) => ({
    location: state.location,
    authSetting: state.user.authSetting
}), (dispatch) => ({
    getLocation(location) {
        dispatch(getCurLocation(location))
    },
    getAuth(auth) {
        dispatch(getAuth(auth))
    }
}))
class City extends Component {

    public handleTap(e) {
        console.log('tap', e)
        Taro.navigateTo({
            url: './detail/index?title=宿迁中学咨询点'
        })
    }

    public getLocationAuth(e) {
        console.log(e)
        if (e.detail.authSetting['scope.userLocation']) {
            this.props.getAuth(e.detail)
            getLocation(this)
        }
    }
    
    public componentDidMount() {
        if (this.props.authSetting['scope.userLocation']) {
            getLocation(this)
        }
    }

    public render() {
        const { location: { curLocation }, authSetting } = this.props
        return (
            <View className="map">
                { !authSetting['scope.userLocation']?
                (<View className="map-mask">
                    <AtButton 
                        circle
                        type="primary"
                        openType="openSetting"
                        onOpenSetting={this.getLocationAuth.bind(this)}
                    >获取当前位置</AtButton>
                </View>) :
                (<Map 
                    className="map-content" 
                    showLocation
                    longitude={curLocation.longitude} 
                    latitude={curLocation.latitude}
                    scale={18}
                    markers={[{
                        id: 0,
                        longitude: 120.58,
                        latitude: 31.29,
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
                ></Map>)
                }
            </View>
        )
    }
}

export default City as ComponentClass<PageOwnProps, PageState>