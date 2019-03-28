import { GET_AUTH, LOG_IN, GET_WECHAT_INFO, GET_USER_INFO } from '@/constants/userInfo'
import { IUserInfo } from '@/types/userInfo'

const INITIAL_STATE: IUserInfo = {
    authSetting: {},
    token: '',
    wechatInfo: {
        nickName: '',
        avatarUrl: '',
        city: '',
        province: '',
        country: '',
        language: 'zh_CN',
        gender: 0
    },
    userInfo: {}
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_AUTH:
            return {
                ...state,
                authSetting: action.data.authSetting
            }
        case LOG_IN:
            return {
                ...state,
                code: action.data.code
            }
        case GET_WECHAT_INFO:
            return {
                ...state,
                wechatInfo: action.data.wechatInfo
            }
        case GET_USER_INFO: 
            return {
                ...state,
                userInfo: action.data.userInfo
            }
        default:
            return state
    }
}