import {combineReducers} from 'redux';

import { dragonReducer } from './dragonReducer';
import { titleReducer}  from './titleReducer';

export const reducer = combineReducers({
    dragon: dragonReducer,
    title: titleReducer
})