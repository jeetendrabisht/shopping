import { items } from './productsReducer';
import { category } from './categoryReducer';
import { banner } from './bannerReducer'; 
import { cartData } from './cartDataReducer'; 
import { cartOpenHere } from './cartOpenReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    items,
    category,
    banner,
    cartData,
    cartOpenHere
});

export default rootReducer;

