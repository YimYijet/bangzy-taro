import {
  ADD,
  MINUS
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd (): any {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
