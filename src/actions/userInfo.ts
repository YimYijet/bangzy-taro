import { GET_AUTH, LOG_IN, GET_WECHAT_INFO, GET_USER_INFO } from '../constants/userInfo'
import { IUserInfo } from '../types/userInfo'
import { getUser } from '../services/userInfo'

export interface IUserInfoAction {
    type: string
    data: IUserInfo
    code?: number
}

export function getAuth(authSetting: object): IUserInfoAction {
    return {
        type: GET_AUTH,
        data: {
            authSetting
        } as IUserInfo
    }
}

export function login(code: string): IUserInfoAction {
    return {
        type: LOG_IN,
        data: {
            code
        } as IUserInfo
    }
}

export function getWechatInfo(wechatInfo: object): IUserInfoAction {
    return {
        type: GET_WECHAT_INFO,
        data: {
            wechatInfo
        } as IUserInfo
    }
}

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

