import {createStore, combineReducers} from 'redux'

import playerReducer from './reducers/playerReducer';
import scoreReducer from './reducers/scoreReducer';

export default createStore(combineReducers({
    playerReducer,
    scoreReducer
}));
