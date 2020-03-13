import { combineReducers } from 'redux';

import auth from "./auth"
import nav from './nav'
import movie from './movie'

const reducers = combineReducers({
   auth,
   nav,
   movie
});

export default reducers;
