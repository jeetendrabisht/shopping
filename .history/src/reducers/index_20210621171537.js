import { items } from './productsReducer';
import { category } from './categoryReducer';
import { banner } from './bannerReducer'; 
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    items,
    category,
    banner
});

export default rootReducer;

