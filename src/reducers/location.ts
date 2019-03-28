import { GET_CUR_LOCATION, GET_CUR_CITY, GET_LOCATION_LIST, SET_OPENED } from '@/constants/location'
import { ILocation } from '@/types/location'

const INITIAL_STATE: ILocation = {
    curLocation: {},
    curCity: {},
    locationList: [
        {
            name: '南京',
            code: '001'
        }
    ],
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_CUR_LOCATION:
            return {
                ...state,
                curLocation: action.data.curLocation
            }
        case GET_CUR_CITY:
            return {
                ...state,
                curCity: action.data.curCity
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