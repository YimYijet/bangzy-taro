export type location = {
    name: string
    code: string
}

export type ILocation = {
    // 当前位置
    curLocation: {}
    // 位置列表
    locationList:  location[]
}