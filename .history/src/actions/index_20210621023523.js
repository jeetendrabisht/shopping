import axios from 'axios';
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

export const getProductsAPI = (url) => {
    console.log('Connecting to getProductsAPI...');
    return (dispatch) => {
        dispatch(itemsAreLoading(true));
        console.log("Url  ", url)
        console.log("Helloo");
        axios.get("../server/products/index.get.json")
            .then((response) => {
                if (response.status !== 200) {
                    console.log("Error  ", response)
                    throw Error(response.statusText);
                }
                console.log("Data  ", response)
                dispatch(itemsAreLoading(false));
                return response;
            })
            .then((response) => dispatch(itemsFetchDataSuccess(response.data.results)))
            .catch(() => dispatch(itemsHaveError(true)));
    };
}