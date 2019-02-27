import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView, Swiper, SwiperItem, Text, Image } from '@tarojs/components'
import { AtFloatLayout, AtTag, AtList, AtListItem, AtAccordion, AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'

import './index.scss'

import 'taro-ui/dist/weapp/css/index.css'

type PageStateProps = {

}

type PageDispatchProps = {

}

type PageOwnProps = {
    title: string
}

type PageState = {
    isOpen: boolean
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface LocationDetail {
    props: IProps
}

@connect(() => ({}), (dispatch) => ({

}))
class LocationDetail extends Component{

    public config: Config = {
        backgroundColor: "#eee",
        navigationBarTitleText: "附近",
        navigationBarTextStyle: "white",
        navigationBarBackgroundColor: '#353535',
    }

    public state: PageState = {
        isOpen: false
    }

    public handleClose() {
        this.setState({
            isOpen: false
        })
    }

    public openLayout() {
        this.setState({
            isOpen: true
        })
    }

    public render() {
        const { title } = this.props,
        { isOpen } = this.state
        return (
            <ScrollView className="detail" scrollY>
                <View className="at-row detail-wrap">
                    <View className="at-col at-col-8 detail-title">
                        {title}
                        <Text className="detail-title-decorate"></Text>
                    </View>
                    <AtTag className={`detail-service-on`} circle>{'服务中'}</AtTag>
                </View>
                <Swiper
                    className='detail-swiper'
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    circular
                    indicatorDots
                    autoplay>
                    <SwiperItem>
                        <Image src="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg"></Image>
                    </SwiperItem>
                    <SwiperItem>
                        <Image src="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg"></Image>
                    </SwiperItem>
                    <SwiperItem>
                        <Image src="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg"></Image>
                    </SwiperItem>
                </Swiper>
                <Text>\n</Text>
                <AtList hasBorder={false}>
                    <AtListItem
                        hasBorder={false}
                        title="负责人"
                        extraText={'江泽民'}>
                    </AtListItem>
                </AtList>
                <AtAccordion title="联系电话">
                    <View className="detail-phone">12345678912</View>
                    <View className="detail-phone">12345678912</View>
                    <View className="detail-phone">12345678912</View>
                    <View className="detail-phone">12345678912</View>
                </AtAccordion>
                <Text>\n</Text>
                <AtButton type='primary' onClick={this.openLayout.bind(this)}>预约咨询</AtButton>
                <AtFloatLayout
                    title="预约咨询"
                    isOpened={isOpen}
                    onClose={this.handleClose.bind(this)}>

                </AtFloatLayout>
            </ScrollView>
        )
    }
}

export default LocationDetail as ComponentClass<PageOwnProps, PageState>