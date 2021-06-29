import { items } from './productsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    items,
});

export default rootReducer;

