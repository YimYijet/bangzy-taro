import { GET_CUR_LOCATION, GET_LOCATION_LIST } from '../constants/location'
import { ILocation, location } from '../types/location'
import { getLocationList } from '../services/location'

export interface ILocationAction {
    type: string
    data: ILocation
    code?: number
}

export function getLocationListAction(list: location[]): ILocationAction {
    return {
        type: GET_LOCATION_LIST,
        data: {
            locationList: list
        } as ILocation,
    }
}

export function getCurLocation(location: object):ILocationAction {
    return {
        type: GET_CUR_LOCATION,
        data: {
            curLocation: location
        } as ILocation,
    }
}

// 异步获取位置列表
export function asyncGetLocationList(): any {
    return (dispatch, getState) => {
        getLocationList().then(res => {
            dispatch(getLocationListAction(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}