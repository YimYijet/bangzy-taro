import Taro from '@tarojs/taro'

const BASE_URL = 'http://localhost:3344'

export default function (param: Taro.request.Param, full_url: boolean = false): Promise<any> {
    return Taro.request({
        ...param,
        url: full_url ? param.url : `${BASE_URL}${param.url}`
    })
}