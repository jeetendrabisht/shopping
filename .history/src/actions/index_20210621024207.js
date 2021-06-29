// import axios from 'axios';
import data from "../server/products/index.get.json";

import {
    ITEMS_FETCH_DATA_SUCCESS,
    ITEMS_ARE_LOADING,
    ITEMS_HAVE_ERROR,
} from './action-types';


export function itemsHaveError(bool) {
    return {
        type: ITEMS_HAVE_ERROR,
        hasError: bool
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

export const getProductsAPI = () => {
    console.log('Connecting to getProductsAPI...');
    return (dispatch) => {
        dispatch(itemsFetchDataSuccess(data));
    };
}