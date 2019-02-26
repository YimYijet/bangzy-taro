import { combineReducers } from 'redux'
import counter from './counter'
import user from './userInfo'
import location from './location'

export default combineReducers({
    counter,
    user,
    location,
})
