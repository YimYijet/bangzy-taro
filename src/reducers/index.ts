import { combineReducers } from 'redux'
import counter from './counter'
import user from './userInfo'

export default combineReducers({
    counter,
    user
})
