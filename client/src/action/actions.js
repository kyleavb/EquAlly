export const ADD_COMMENT = 'ADD_COMMENT'

export function addComment(text){
  return{ type: ADD_COMMENT, data: text}
}
