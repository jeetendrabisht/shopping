let carDataInitial = {
    cartOpen : false
};

export function cartData(state = carDataInitial, action) {
    switch (action.type) {
        case 'CART_ITEM_SUCCESS':
            return action.items;
        default:
            return state;
    }
}