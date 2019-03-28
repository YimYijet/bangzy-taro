export type location = {
    name: string
    code: string
}

export type ILocation = {
    // 当前位置
    curLocation: {}
    // 当前城市
    curCity: {}
    // 位置列表
    locationList: location[]
}