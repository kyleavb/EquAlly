import { createStore } from 'redux';
import userApp from '../reducer/reducer'

const store = createStore(userApp)

export default store;
