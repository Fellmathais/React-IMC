import {createStore} from 'redux';
import RootReducers from './Reducers';

const store = createStore(RootReducers);

export default store; 