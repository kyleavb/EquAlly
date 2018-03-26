import {ADD_COMMENT, LIFT_USER, START_CHAT, TEMP} from '../action/actions'
const initialState = {
  userId: '',
  firstName: '',
  lastName: '',
  username: '',
  loginMethod: '',
  pronouns: '',
  comments: [],
  journals: [],
  posts: [],
  admin: false,
  ally: false,
  zipcode: 0,
  socket: null,
  temp: ''
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
    case LIFT_USER:
      return(
          console.log('LIFT_USER reducer fired', action.data),
          Object.assign({}, state, {
            userId: action.data._id,
            firstName: action.data.firstName,
            lastName: action.data.lastName,
            ally: action.data.ally,
            admin: action.data.admin,
            pronouns: action.data.pronouns,
            username: action.data.username,
            ally: action.data.ally
          }
        )
      )
    case START_CHAT:
      return(
          console.log('START_CHAT reducer fired'),
          Object.assign({}, state, {
            socket: action.data.socket
          }
        )
      )
    case TEMP:
      return(
        Object.assign({}, state, {
          temp: action.data
        })
      )
    default:
      return state
  }
}
export default userApp
