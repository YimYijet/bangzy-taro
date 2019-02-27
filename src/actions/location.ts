import { GET_CUR_LOCATION, GET_CUR_CITY, GET_LOCATION_LIST, SET_OPENED } from '../constants/location'
import { ILocation, location } from '../types/location'
import { getLocationList } from '../services/location'

export interface ILocationAction {
    type: string
    data: ILocation
    code?: number
}

// 获取城市列表
export function getLocationListAction(list: location[]): ILocationAction {
    return {
        type: GET_LOCATION_LIST,
        data: {
            locationList: list
        } as ILocation,
    }
}

// 获取当前位置
export function getCurLocation(location: object): ILocationAction {
    return {
        type: GET_CUR_LOCATION,
        data: {
            curLocation: location
        } as ILocation,
    }
}

// 获取当前城市
export function getCurCity(city: object): ILocationAction {
    return {
        type: GET_CUR_CITY,
        data: {
            curCity: city
        } as ILocation,
    }
}

// 设置授权弹窗
export function setOpened(isOpened: boolean): ILocationAction {
    return {
        type: SET_OPENED,
        data: {
            isOpened: isOpened
        } as ILocation,
    }
}

// 异步获取城市列表
export function asyncGetLocationList(): any {
    return (dispatch, getState) => {
        getLocationList().then(res => {
            dispatch(getLocationListAction(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}