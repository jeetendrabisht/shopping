import { items, itemsHaveError, itemsAreLoading } from './characterDetailsReducer';
import { searchCharacter } from './searchCharacterDetails';
import { filterArrayItems } from './filterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    items,
    itemsHaveError,
    itemsAreLoading,
    searchCharacter,
    filterArrayItems
});

export default rootReducer;

