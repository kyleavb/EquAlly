export const ADD_COMMENT = 'ADD_COMMENT'
export const LIFT_USER = 'LIFT_USER'

export function addComment(text){
  return{ type: ADD_COMMENT, data: text}
}

export function liftUser(userData){
  return{ type: LIFT_USER, data: userData }
}
