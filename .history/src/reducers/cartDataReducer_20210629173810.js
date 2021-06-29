export function cartData(state = [{data: false}], action) {
    switch (action.type) {
        case 'CART_ITEM_SUCCESS':
            return action.items;
        default:
            return state;
    }
}