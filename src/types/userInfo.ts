export type IUserInfo = {
    // 设置授权
    authSetting: {}
    // 登录获取code，用于换openId, sessionKey, unionId
    code: string
    // 微信用户信息
    wechatInfo: {
        // 昵称
        nickName: string
        // 头像地址
        avatarUrl: string
        // 市
        city: string
        // 省
        province: string
        // 国
        country: string
        // 语言
        language: string
        // 性别
        gender: number
    }
    // 登录信息
    userInfo: {
        
    }
}