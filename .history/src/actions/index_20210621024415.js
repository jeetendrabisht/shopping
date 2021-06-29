import data from "../server/products/index.get.json";

import {
    ITEMS_FETCH_DATA_SUCCESS
} from './action-types';

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