let data = 23;

export function cartData(state = [data], action) {
    switch (action.type) {
        case 'CART_ITEM_SUCCESS':
            return action.items;
        default:
            return state;
    }
}