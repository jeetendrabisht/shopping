import { items } from './productsReducer';
import { category } from './categoryReducer';
import { banner } from './bannerReducer'; 
import { cartData } from './bannerReducer'; 
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    items,
    category,
    banner,
    cartData
});

export default rootReducer;

