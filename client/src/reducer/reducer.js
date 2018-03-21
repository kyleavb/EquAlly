import {ADD_COMMENT} from '../action/actions'
const initialState = {
  userId: '',
  firstName: '',
  lastName: '',
  loginMethod: '',
  comments: [],
  journals: [],
  posts: [],
  admin: false,
  zipcode: 0,
}

function userApp(state = initialState, action){
  switch(action.type){
    case ADD_COMMENT:
      return(
        console.log('ADD_COMMENT reducer fired'),
        Object.assign({}, state, {
          comments: [
            ...state.comments,
            {
              text: action.data
            }
          ]
        })
      )
    default:
      return state
  }
}
export default userApp
