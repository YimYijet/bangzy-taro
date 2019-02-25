import request from '../request'

export function getLocationList() {
    return request({
        url: '/location',
        method: 'GET'
    })
}