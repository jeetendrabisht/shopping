export function cartOpenHere(state = [], action) {
    switch (action.type) {
        case 'CART_OPEN_SUCCESS':
            return action.items;
        default:
            return state;
    }
}