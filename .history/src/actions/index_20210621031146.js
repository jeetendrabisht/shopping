import data from "../server/products/index.get.json";

import {
    ITEMS_FETCH_DATA_SUCCESS,
    ITEMS_CATEGORY_DATA_SUCCESS
} from './action-types';

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export const getProductsAPI = () => {
    return (dispatch) => {
        dispatch(itemsFetchDataSuccess(data));
    };
}

export function itemsCategoryDataSuccess(items) {
    return {
        type: ITEMS_CATEGORY_DATA_SUCCESS,
        items
    };
}

export const getCategory = () => {
    return (dispatch) => {
        dispatch(itemsCategoryDataSuccess(data));
    };
}

