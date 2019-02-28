import { GET_AUTH, LOG_IN, GET_WECHAT_INFO, GET_USER_INFO } from '@/constants/userInfo'
import { IUserInfo } from '@/types/userInfo'
import { getUser } from '@/services/userInfo'

export interface IUserInfoAction {
    type: string
    data: IUserInfo
    code?: number
}

// 获取用户授权
export function getAuth(authSetting: object): IUserInfoAction {
    return {
        type: GET_AUTH,
        data: {
            authSetting
        } as IUserInfo
    }
}


// 获取登录code
export function login(code: string): IUserInfoAction {
    return {
        type: LOG_IN,
        data: {
            code
        } as IUserInfo
    }
}

// 微信登录获取用户信息
export function getWechatInfo(wechatInfo: object): IUserInfoAction {
    return {
        type: GET_WECHAT_INFO,
        data: {
            wechatInfo
        } as IUserInfo
    }
}

// 服务器登录获取信息
export function getUserInfo(userInfo: object): IUserInfoAction {
    return {
        type: GET_USER_INFO,
        data: {
            userInfo
        } as IUserInfo,
    }
}

// 异步获取userInfo
export function asyncGetUserInfo(): any {
    return (dispatch, getState) => {
        getUser().then(res => {
            dispatch(getUserInfo(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

