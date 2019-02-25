import { GET_CUR_LOCATION, GET_LOCATION_LIST } from '../constants/location'
import { ILocation } from '../types/location'

const INITIAL_STATE: ILocation = {
    curLocation: {},
    locationList: [
        {
            name: '南京',
            code: '001'
        }
    ]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_CUR_LOCATION:
            return {
                ...state,
                curLocation: action.data.curLocation
            }
        case GET_LOCATION_LIST:
            return {
                ...state,
                locationList: action.data.locationList
            }
        default:
            return state
    }
}