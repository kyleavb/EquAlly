export const ADD_COMMENT = 'ADD_COMMENT'
export const LIFT_USER = 'LIFT_USER'
export const START_CHAT = 'START_CHAT'

export function addComment(text){
  return{ type: ADD_COMMENT, data: text}
}

export function liftUser(userData){
  return{ type: LIFT_USER, data: userData }
}

export function startChat(chat){
  return{ type: START_CHAT, data: chat}
}
