import { items } from './productsReducer';
import { category } from './categoryReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    items,
    category
});

export default rootReducer;

