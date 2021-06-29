let data = 23;

export function cartData(state = [data], action) {
    switch (action.type) {
        case 'CART_ITEM_SUCCESS':
            let newObj = Object.assign({}, {cartOpen: action.items});
            return newObj;
        default:
            return state;
    }
}