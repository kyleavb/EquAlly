const uuid = require('uuid/v4');

// Return an object that
const createUser = ({ name = '' } = {}) => (
  {
    id: uuid(),
    name
  }
)

// Create a message object
const createMessage = ({ message = '', sender = '' } = {}) => (
  {
    id: uuid(),
    time: getTime(new Date(Date.now())),
    message,
    sender
  }
)

//
const createChat = ({ messages = [], name = 'Community', users = [] } = {}) (
  {
    id: uuid(),
    name,
    messages,
    users,
    typingUsers: []
  }
)

// Get the time and return formatted
const getTime = date => {
  return `${date.getHours()}:${('0')+date.getMinutes()).slice(-2)}`
}
