import { items } from './productsReducer';
import { category } from './categoryReducer';
import { combineReducers } from 'redux';

console.log("category ======> ", category);

const rootReducer = combineReducers({
    items,
    category
});

export default rootReducer;

