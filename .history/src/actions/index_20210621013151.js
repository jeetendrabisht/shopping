import axios from 'axios';
import {
    ITEMS_FETCH_DATA_SUCCESS,
    ITEMS_ARE_LOADING,
    ITEMS_HAVE_ERROR,
    SEARCH_STORE_DATA,
    SELECTED_FILTER
} from './action-types';


export function itemsHaveError(bool) {
    return {
        type: ITEMS_HAVE_ERROR,
        hasError: bool
    };
}

export function selectedFilter(payload) {
    return {
        type: SELECTED_FILTER,
        payload: payload
    };
}

export function itemsAreLoading(bool) {
    return {
        type: ITEMS_ARE_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export function searchStoreData(items) {
    return {
        type: SEARCH_STORE_DATA,
        payload: items
    };
}


export const getRickMortyShowAPI = (url) => {
    console.log('Connecting to getRickMortyShowAPI...');
    return (dispatch) => {
        dispatch(itemsAreLoading(true));
        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(itemsAreLoading(false));
                return response;
            })
            .then((response) => dispatch(itemsFetchDataSuccess(response.data.results)))
            .catch(() => dispatch(itemsHaveError(true)));
    };
}