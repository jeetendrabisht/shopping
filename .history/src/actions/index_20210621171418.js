import { products } from "../server/products/index.get";
import categoryData from "../server/categories/index.get.json";

import {
    ITEMS_FETCH_DATA_SUCCESS,
    ITEMS_CATEGORY_DATA_SUCCESS,
    BANNER_DATA_SUCCESS
} from './action-types';

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export const getProductsAPI = () => {
    return (dispatch) => {
        dispatch(itemsFetchDataSuccess(products));
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
        dispatch(itemsCategoryDataSuccess(categoryData));
    };
}

export function bannerDataSuccess(items) {
    return {
        type: BANNER_DATA_SUCCESS,
        items
    };
}

export const getBannerCall = () => {
    return (dispatch) => {
        dispatch(bannerDataSuccess(categoryData));
    };
}

