import { items, itemsHaveError, itemsAreLoading } from './productsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    items,
    itemsHaveError,
    itemsAreLoading,
});

export default rootReducer;

